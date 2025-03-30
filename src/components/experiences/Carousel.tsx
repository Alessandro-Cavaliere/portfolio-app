import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function ImageCarousel({ images, refContainer }) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      ref={refContainer}
      className="relative w-full flex justify-center items-center overflow-hidden"
    >
      {/* Wrapper per immagine + overlay */}
      <div className="">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index}`}
            onClick={handleNext}
            className="w-full h-auto object-cover z-0"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            style={{width:"100%", borderRadius:"20px", cursor:"pointer"}}
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

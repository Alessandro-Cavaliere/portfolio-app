import { motion, AnimatePresence } from "framer-motion";
import { useState, RefObject } from "react";

interface ImageCarouselProps {
  images: string[];
  refContainer: RefObject<HTMLDivElement>;
}

export default function ImageCarousel({ images, refContainer }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  return (
      <AnimatePresence mode="wait" >
          <motion.img
            ref={refContainer}
            key={images[index]}
            src={images[index]}
            alt={`Slide ${index}`}
            onClick={handleNext}
            className="carousel"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
          />
      </AnimatePresence>
  );
}

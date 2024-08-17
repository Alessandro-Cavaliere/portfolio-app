import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Parallax.tsx component -> renders the parallax effect on the screen
 * @param type - type of parallax effect 
 * @returns JSX.Element of the Parallax component
 */
const Parallax = ({ type }: { type: string }) => {
  /*//////////////////////////////////////////////////////////////
                         STATE DECLARATIONS
  //////////////////////////////////////////////////////////////*/
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, rgb(9, 14, 17), rgb(47, 73, 90))"
            : "linear-gradient(180deg, rgb(47, 73, 90),rgb(9, 14, 17))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/planets.png" : "/sun.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;
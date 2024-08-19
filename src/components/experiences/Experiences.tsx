import { useRef } from "react";
import "./experiences.scss";
import { motion, useInView } from "framer-motion";

/*//////////////////////////////////////////////////////////////
                     OBJECTS FOR FRAMER MOTION
//////////////////////////////////////////////////////////////*/
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

/**
 * Experiences component -> renders the Experiences section of the application
 * @returns JSX.Element of the Experiences component
 */
const Experiences = () => {
  
  /*//////////////////////////////////////////////////////////////
                            STATE DECLARATIONS
  //////////////////////////////////////////////////////////////*/
  const ref = useRef(null);
  useInView(ref, { margin: "-100px" });

  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <motion.div
      className="experiences"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
<h1 style={{display:"flex",justifyContent:"center",height:"100%",alignItems:"center"}}>SOON...</h1>
    
    </motion.div>
  );
};

export default Experiences;
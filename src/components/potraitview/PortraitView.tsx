import "./potraitview.scss";
import { motion } from "framer-motion";
import me from "../../assets/me.png";
import mouse_scroll from "../../assets/mouse_scroll.png";

/*//////////////////////////////////////////////////////////////
                     OBJECTS FOR FRAMER MOTION
//////////////////////////////////////////////////////////////*/
const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-405%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 15,
    },
  },
};

/**
 * PotraitView component is used for view my photo and some information about me
 * @returns JSX.Element of the PotraitView component
 */
const PotraitView = () => {
  return (
    <div className="potraitview">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants as never}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>ALESSANDRO CAVALIERE</motion.h2>
          <motion.h1 variants={textVariants}>
            Blockchain Developer & <br/> Graduated MSc in Cybersecurity 
          </motion.h1>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src={mouse_scroll}
            alt="mouse scroll gif"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants as never}
        initial="initial"
        animate="animate"
      >
        Web2 & Web3 Security
      </motion.div>
      <div className="imageContainer">
        <img src={me} alt="my picture"/>
      </div>
      </div>
  );
};

export default PotraitView;

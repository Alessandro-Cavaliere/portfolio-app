import { useRef } from "react";
import "./experiences.scss";
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import ImageCarousel from "./Carousel";
import CC1 from "/home/galexela/Documents/GitHub/portfolio-app/src/assets/cyberchallange/CC1.jpeg";
import CC2 from "/home/galexela/Documents/GitHub/portfolio-app/src/assets/cyberchallange/CC2.jpeg";
import CC3 from "/home/galexela/Documents/GitHub/portfolio-app/src/assets/cyberchallange/CC3.jpeg";
import BlockchainDev from "/home/galexela/Documents/GitHub/portfolio-app/src/assets/experiences/BlockchainDev.jpg";

/*//////////////////////////////////////////////////////////////
                         EXPERIENCES OBJECTS
//////////////////////////////////////////////////////////////*/
const items = [
  {
    id: 1,
    title: "CyberChallengeIT Finalist",
    img: [CC1, CC2, CC3],
    desc: "CyberChallenge.IT is the first cybersecurity training program for young talents between 16 and 24 years old, organized by the Cybersecurity National Lab. It is the main Italian initiative to identify, attract, recruit and place the next generation of cybersecurity professionals.",
    link: "https://www.cyberchallenge.it/",
  },
  {
    id: 2,
    title: "Blockchain Developer 01/2023 - 01/2024",
    img: [BlockchainDev],
    desc: "I have led private blockchain development projects using Geth, written and studied smart contracts in Solidity, and utilized technologies such as Node.js and Laravel (PHP). I have also worked extensively with Amazon AWS, including Amazon EC2 instances. Additionally, I developed the logic for a non-custodial crypto wallet supporting 5 different blockchains and built the related web application using React.js.",
  },
];

/*//////////////////////////////////////////////////////////////
                         ITEM INTERFACE
//////////////////////////////////////////////////////////////*/
interface Item {
  link?: string;
  id: number;
  title: string;
  img: string[];
  desc: string;
}

/**
 * Single component is used to render a single project
 * @param item - item object to render 
 * @returns JSX.Element of the Single component
 */
const Single = ({ item }: { item: Item }) => {

  /*//////////////////////////////////////////////////////////////
                         STATE DECLARATIONS
  //////////////////////////////////////////////////////////////*/
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
return (
    <section>
        <div className="container">
            <div className="wrapper">
                {item.img.length > 1 ?
                <ImageCarousel images={item.img} refContainer={ref} />:
                <div className="imageContainer" ref={ref}>
                    <img style={{width:"80%"}} src={item.img[0]} alt="" />
                </div>
                }
                <motion.div className="textContainer" >
                    <h2 style={{fontSize:"8vh"}}>{item.title}</h2>
                    <p>{item.desc}</p>
                    {item.link &&
                    <button onClick={() => window.open(item.link, "_blank")}>See More</button>}
                </motion.div>
            </div>
        </div>
    </section>
);
};

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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <div className="projects" ref={ref}>
      <div className="progress">
        <h1>Experiences</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Experiences;
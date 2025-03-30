import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./preloader.scss";

interface PreloaderProps {
    onComplete: () => void;
  }

/**
 * Preloader.tsx component -> Preload page for the website
 * @returns JSX.Element that represents the preloader component
 */
const Preloader = ({ onComplete }: PreloaderProps) => {
    /*//////////////////////////////////////////////////////////////
                         STATE DECLARATIONS
    //////////////////////////////////////////////////////////////*/
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
  
    /*//////////////////////////////////////////////////////////////
                             USE EFFECT
    //////////////////////////////////////////////////////////////*/
    useEffect(() => {
      const duration = 5000; 
      const interval = 50; 
      const totalSteps = duration / interval;
  
      const timer = setTimeout(() => {
        setLoading(false);
        onComplete();
      }, duration);
  
      const progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const nextProgress = prevProgress + (100 / totalSteps);
          return nextProgress >= 100 ? 100 : nextProgress;
        });
      }, interval);
      return () => {
        clearTimeout(timer);
        clearInterval(progressInterval);
      };
    }, [onComplete]);

 
    /*//////////////////////////////////////////////////////////////
                            OBJECTS FOR FRAMER MOTION
    //////////////////////////////////////////////////////////////*/
    const blockVariants = {
        rotate: {
        rotate: [0, 360], 
        transition: {
            duration: 2, 
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
        },
        },
    };

/*//////////////////////////////////////////////////////////////
                         STATE DECLARATIONS
//////////////////////////////////////////////////////////////*/
return (
    loading ? (
        <div className="preloader">

            <progress className="progress-bar" value={progress} max="100" />
            <div className="child-div-preloader">   
            {Array(3).fill(null).map((_, index) => (
                <motion.svg
                    key={index}
                    viewBox="0 0 512 512"
                    id="block"
                    className="block"
                    variants={blockVariants as never}
                    animate={{ rotate: [0, 360], transition: { duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "loop", times: [0, 0.8] } }}
                >
                    <polygon fill="#e0e0e0" points="34.29 384 34.3 128 256 256 256 512 34.29 384"></polygon>
                    <polyline fill="#c0c0c0" points="34.29 128 256 0 477.7 128 256 256"></polyline>
                    <polyline fill="#b0b0b0" points="256 256 477.71 128 477.71 384 256 512"></polyline>
                </motion.svg>
            ))}
            </div>
            <p className="loading-text">
                <span>My </span> <span>portfolio</span> <span>will</span> <span>be</span> <span>powered</span> <span>by</span> <span className="highlight">IPFS</span> <span>and</span> <span className="highlight">ESN</span> <span>,</span> <span>embracing</span> <span>decentralized</span> <span>hosting</span> <span>for</span> <span>a</span> <span>modern</span> <span>web</span> <span>experience!</span>
            </p>
        </div>
    ) : null
);
};

export default Preloader;

import { useCallback, useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

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

  const particlesInit = useCallback(async (engine :Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
  await console.log(container);
}, []);

  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "experiences"
            ? "linear-gradient(180deg, rgb(47, 73, 90),rgb(9, 14, 17))"
            : "linear-gradient(180deg, rgb(47, 73, 90),rgb(9, 14, 17))",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "experiences" ? "My Experiences" : "What I Did?"}
      </motion.h1>
      <motion.div
        className="particles"
        style={{
          y: yBg
        }}
      >
      <Particles 
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
          background: {
              color: {
                  value: "linear-gradient(180deg, rgb(9, 14, 17), rgb(47, 73, 90))",
              },
          },
          container:{
            
          },
          fpsLimit: 180,
          interactivity: {
              events: {
                  onHover: {
                      enable: true,
                      mode: "repulse",
                  },
                  resize: true,
              },
              modes: {
                  push: {
                      quantity: 4,
                  },
                  repulse: {
                      distance: 200,
                      duration: 0.4,
                  }
              },
          },
          particles: {
              color: {
                  value: "#ffffff",
              },
              links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
              },
              move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                      default: "bounce",
                  },
                  random: false,
                  speed: 3,
                  straight: false,
              },
              number: {
                  density: {
                      enable: true,
                      area: 800,
                  },
                  value: 100,
              },
              opacity: {
                  value: 0.5,
              },
              shape: {
                  type: "circle",
              },
              size: {
                  value: { min: 1, max: 3 },
              },
          },
          detectRetina: true,
      }}
  />
      </motion.div>
      
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
      
    </div>
  );
};

export default Parallax;
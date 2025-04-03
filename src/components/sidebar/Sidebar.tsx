import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import AnimatedMenuButton from "./animatedMenuButton/AnimatedMenuButton";

/*//////////////////////////////////////////////////////////////
                     OBJECTS FOR FRAMER MOTION
//////////////////////////////////////////////////////////////*/
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

/**
 * Sidebar.tsx component -> renders the sidebar with the links to the different sections of the homepage
 * @returns JSX.Element that represents the sidebar component
 */
const Sidebar = () => {
  /*//////////////////////////////////////////////////////////////
                            STATE DECLARATIONS
  //////////////////////////////////////////////////////////////*/
  const [open, setOpen] = useState(false); // If open, it will pop up the sidebar with an animation
  const sidebarRef = useRef<HTMLDivElement>(null); // Reference to the sidebar DOM node

  /*//////////////////////////////////////////////////////////////
                            EFFECTS
  //////////////////////////////////////////////////////////////*/
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  /*//////////////////////////////////////////////////////////////
                               RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
      ref={sidebarRef}
    >
      <motion.div className="bg" variants={variants}>
        <Links setOpen={setOpen} />
      </motion.div>
      <AnimatedMenuButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;

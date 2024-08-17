import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

/**
 * Cursor.tsx component -> follows the mouse movement on the screen
 * @returns JSX.Element that represents the cursor component
 */
const Cursor = () => {
  /*//////////////////////////////////////////////////////////////
                             USESTATES
  //////////////////////////////////////////////////////////////*/
  const [position, setPosition] = useState({ x: 0, y: 0 });

  /*//////////////////////////////////////////////////////////////
                             USEEFFECT
  //////////////////////////////////////////////////////////////*/
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x+10, y: position.y+10 }}
    ></motion.div>
  );
};

export default Cursor;
import { motion } from "framer-motion";

/*//////////////////////////////////////////////////////////////
                     OBJECTS FOR FRAMER MOTION
//////////////////////////////////////////////////////////////*/
const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};
type LinksProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Links: React.FC<LinksProps> = ({ setOpen }) => {
  /*//////////////////////////////////////////////////////////////
                             CONSTANTS
  //////////////////////////////////////////////////////////////*/
  const items = ["Homepage", /*"Services",*/ "Projects", "Contact", /*"About"*/]; // When clicked, it will scroll to the respective section

  /*//////////////////////////////////////////////////////////////
                              RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(false) }
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
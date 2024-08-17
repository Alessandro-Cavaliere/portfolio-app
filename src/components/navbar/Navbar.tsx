import { useEffect, useState } from "react";
import acPhoto from "../../assets/ac.png"
import Sidebar from "../sidebar/Sidebar";
import linkedin from "../../assets/socials/linkedin.png"
import x from "../../assets/socials/x.svg"
import github from "../../assets/socials/github.svg"
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  /*//////////////////////////////////////////////////////////////
                            STATE DECLARATIONS
  //////////////////////////////////////////////////////////////*/
  const [pVisible,setpVisible] = useState('')

  /*//////////////////////////////////////////////////////////////
                             USEEFFECTS
  //////////////////////////////////////////////////////////////*/
  useEffect(()=>{
    setTimeout(() => {
      setpVisible("")
    }, 3000)
    setpVisible("100%")
  },[])

  /*//////////////////////////////////////////////////////////////
                             RETURN
  //////////////////////////////////////////////////////////////*/
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="img-div">
            <img src={acPhoto} alt="logo" className="image_style"/>
            <p className="p_style" style={{maxWidth: pVisible}}>Alessandro Cavaliere</p>
          </div>
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/alessandro-cavaliere41/">
            <img src={linkedin} alt="" />
          </a>
          <a href="https://x.com/alessandrocav41">
            <img src={x} alt="" />
          </a>
          <a href="https://github.com/Alessandro-Cavaliere">
            <img src={github} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
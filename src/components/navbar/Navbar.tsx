import { useEffect, useState } from "react";
import acPhoto from "../../assets/ac.png"
import Sidebar from "../sidebar/Sidebar";
import linkedin from "../../assets/socials/linkedin.png"
import x from "../../assets/socials/x.svg"
import github from "../../assets/socials/github.svg"
import "./navbar.scss";
import { motion } from "framer-motion";

/**
 * Navbar.tsx component -> renders the navbar of the application
 * @returns JSX.Element of the Navbar component
 */
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
            <a href="http://localhost:5173">
              <img src={acPhoto} alt="logo" className="image_style"/>
            </a>
            <p className="p_style" style={{maxWidth: pVisible}}>Alessandro Cavaliere</p>
          </div>
          
        </motion.span>  
        <div className="social">
          <a href="https://www.linkedin.com/in/alessandro-cavaliere41/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="" style={{width:40,height:40}}/>
          </a>
          <a href="https://x.com/alessandrocav41" target="_blank" rel="noopener noreferrer">
            <img src={x} alt="" style={{width:40,height:40}}/>
          </a>
          <a href="https://github.com/Alessandro-Cavaliere" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="" style={{width:40,height:40}}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
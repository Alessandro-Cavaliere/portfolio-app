import NavbarCSS from "../styles/navbar.module.css"
import acPhoto from "../assets/ac.png"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Navbar() {
    const [pVisible,setpVisible] = useState('')
    useEffect(()=>{
        setTimeout(() => {
          setpVisible("")
          }, 3000)
        setpVisible("100%")
    },[])
    
    return ( 
    <>
        <nav className={NavbarCSS.nav}>
                    <div className={NavbarCSS.nav_row}>
                        <div className={NavbarCSS.nav_row_container}>
                            <img src={acPhoto} className={NavbarCSS.image_style}/>
                            <p className={NavbarCSS.p_style} style={{maxWidth: pVisible}}>Alessandro Cavaliere</p>
                        </div>
                        <div className={NavbarCSS.nav_row_tagcontainer}>
                            <Link className={NavbarCSS.nav_row_tag} to="/"> Home</Link>
                            <Link className={NavbarCSS.nav_row_tag} to="/"> About</Link>
                            <Link className={NavbarCSS.nav_row_tag} to="/"> Contact</Link>
                        </div>
                    </div>
        </nav>
    </>
     );
}

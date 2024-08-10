import NavbarCSS from "../styles/navbar.module.css"
import acPhoto from "../assets/ac.png"
import acPhoto_variation from "../assets/ac_variation.png"
import { useEffect, useState, useRef } from 'react';
import "../styles/navbar.css"
export default function Navbar(){

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
                        <a href="/home" className={NavbarCSS.link_style}>Home</a>
                        <a href="/about" className={NavbarCSS.link_style}>About</a>
                        <a href="/contact" className={NavbarCSS.link_style}>Contact</a>
                        </div>
                    </div>
        </nav>
    </>   
    );
}

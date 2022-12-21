import NavbarCSS from "../styles/navbar.module.css"
import acPhoto from "../assets/ac.png"
import acPhoto_variation from "../assets/ac_variation.png"
import { Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import { WavyLink } from "react-wavy-transitions";
import "../styles/navbar.css"
interface NavbarScroolProp{
    navbarScroll:boolean
}
export default function Navbar(props:NavbarScroolProp){

    const [pVisible,setpVisible] = useState('')
    useEffect(()=>{
        setTimeout(() => {
          setpVisible("")
          }, 3000)
        setpVisible("100%")
    },[])


    useEffect(()=>{
        console.log(props.navbarScroll)
        if(props.navbarScroll){
            const elements=document.getElementsByClassName("react-wavy-transitions__wavy-link")
            Array.from(elements).forEach(element => element.className="react-wavy-transitions__wavy-link__variation");
        }
            else{
                const elements=document.getElementsByClassName("react-wavy-transitions__wavy-link__variation")
                Array.from(elements).forEach(element => element.className="react-wavy-transitions__wavy-link");
            }
    },[props.navbarScroll])

    return ( 
        <>
    {!props.navbarScroll?
        <nav className={NavbarCSS.nav}>
                    <div className={NavbarCSS.nav_row}>
                        <div className={NavbarCSS.nav_row_container}>
                            <img src={acPhoto} className={NavbarCSS.image_style}/>
                            <p className={NavbarCSS.p_style} style={{maxWidth: pVisible}}>Alessandro Cavaliere</p>
                        </div>
                        <div className={NavbarCSS.nav_row_tagcontainer}>
                        <WavyLink duration={1000} direction="down" to="/home" color="#101722">Home</WavyLink>
                        <WavyLink duration={1000} direction="down" to="/about" color="#101722">About</WavyLink>
                        <WavyLink duration={1000} to="/contact" color="#101722">Contact</WavyLink>
                        <Outlet />
                        </div>
                    </div>
        </nav>
    :
        <nav className={NavbarCSS.nav__variation}>
                        <div className={NavbarCSS.nav_row}>
                            <div className={NavbarCSS.nav_row_container}>
                                <img src={acPhoto_variation} className={NavbarCSS.image_style}/>
                                <p className={NavbarCSS.p_style__variation} style={{maxWidth: pVisible}}>Alessandro Cavaliere</p>
                            </div>
                            <div className={NavbarCSS.nav_row_tagcontainer}>
                            <WavyLink duration={1000} direction="down" to="/home" color="#101722">Home</WavyLink>
                            <WavyLink duration={1000} direction="down" to="/about" color="#101722">About</WavyLink>
                            <WavyLink duration={1000} to="/contact" color="#101722">Contact</WavyLink>
                            <Outlet />
                            </div>
                        </div>
            </nav>
    }
    </>   
    );
}

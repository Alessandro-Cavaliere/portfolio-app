import NavbarCSS from "../styles/navbar.module.css"
import acPhoto from "../assets/ac.png"
export default function Navbar() {
    return ( 
    <>
        <nav className={NavbarCSS.nav}>
                    <div className={NavbarCSS.nav_row}>
                        <div className={NavbarCSS.nav_row_container}>
                            <img src={acPhoto} className={NavbarCSS.image_style}/>
                            <p className={NavbarCSS.p_style}>Alessandro Cavaliere</p>
                        </div>
                    </div>
        </nav>
    </>
     );
}

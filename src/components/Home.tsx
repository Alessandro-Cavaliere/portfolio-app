import { useInView } from 'react-intersection-observer';
import HomeCSS from "../styles/home.module.css"
import mePhoto from "../assets/me.png"
import Navbar from './Navbar';
import { useEffect } from 'react';

export default function Home(){
    const { ref: containerChange , inView: containerChangeIsVisible, entry} = useInView();

    return(
        <>
            <Navbar  navbarScroll={containerChangeIsVisible}/>
            <div className={`${ HomeCSS.container} ${containerChangeIsVisible? HomeCSS.container_variation: ''}`}>
                <div className={HomeCSS.container__children}>
                    
                    <h1 className={`${ HomeCSS.container__h1} ${containerChangeIsVisible? HomeCSS.container__h1_variation: ''}`}>Cavaliere <br/>Alessandro</h1>
                    <p>Computer Science student.</p>
                </div>
                {containerChangeIsVisible?
                <img src={mePhoto} className={HomeCSS.image_style_variation}/>
                :
                <img src={mePhoto} className={HomeCSS.image_style}/>
                }
            </div>

            <div ref={containerChange} style={{height:800,background:"orange"}}>
                <p style={{marginTop:20}}>WEEEE</p>
            </div>

            <div style={{height:800,background:"white"}}>
            </div>

            <div style={{height:800,background:"black"}}>
                <p> WEEEE5</p>
            </div>
        </>
    )
}
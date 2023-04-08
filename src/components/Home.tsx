import { useInView } from 'react-intersection-observer';
import HomeCSS from "../styles/home.module.css"
import mePhoto from "../assets/me.png"
import mouseScroll from "../assets/mouse_scroll.gif"
import Navbar from './Navbar';
import { useEffect } from 'react';

export default function Home(){
    const { ref: containerChange , inView: containerChangeIsVisible, entry} = useInView();

    return(
        <>
        {!containerChangeIsVisible?
        <>
         <Navbar  navbarScroll={containerChangeIsVisible}/>
            <div className={`${ HomeCSS.container} ${containerChangeIsVisible? HomeCSS.container_variation: ''}`}>
                <div className={HomeCSS.container__children}>
                    
                    <h1><span className={HomeCSS.container__h1}>Welcome.</span></h1>
                    <h2 className={HomeCSS.h2}>My name is <span className={HomeCSS.container__h2}>Alessandro Cavaliere</span>, 
                    Blockchain Developer and master student in cybersecurity. This is my personal web site, enjoy it!</h2>
                    <div className={HomeCSS.div_mouse_style}>
                            <div className={HomeCSS.mousey}>
                                <div className={HomeCSS.scroller}></div>
                            </div>
                    </div>
                </div>
                <img src={mePhoto} className={HomeCSS.image_style}/>
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
            :
            <>
             <Navbar  navbarScroll={containerChangeIsVisible}/>
            <div className={`${ HomeCSS.container} ${HomeCSS.container_variation}`}>
                <div className={HomeCSS.container__children}>
                    
                    <h1 className={`${ HomeCSS.container__h1} ${ HomeCSS.container__h1_variation}`}>Welcome.</h1>
                    <h2 className={`${ HomeCSS.container__h2} ${ HomeCSS.container__h2_variation}`}>My name is <span className={HomeCSS.container__h2}>Alessandro Cavaliere</span>, 
                    Blockchain Developer and master student in cybersecurity. This is my personal web site, enjoy it!</h2>
            
                </div>
                <img src={mePhoto} className={HomeCSS.image_style_variation}/>
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
            }
        </>
    )
}
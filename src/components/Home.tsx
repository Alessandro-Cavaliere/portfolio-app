import { useInView } from 'react-intersection-observer';
import HomeCSS from "../styles/home.module.css"
import mePhoto from "../assets/me.png"
import { IoCubeOutline } from "react-icons/io5";
import mouseScroll from "../assets/mouse_scroll.gif"
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

const DEFAULT_SCROLL_GAP = 80

export default function Home(){
    const { ref: containerChange , inView: containerChangeIsVisible, entry} = useInView();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    var scrollTop = document.documentElement.scrollTop * 0.5;

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setScrollPosition(currentPosition);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(()=>{
        console.log(scrollPosition)
    })
    return(
        <>
        {!containerChangeIsVisible?
        <>
         <Navbar  navbarScroll={containerChangeIsVisible}/>
            <div className={`${ HomeCSS.container} ${containerChangeIsVisible? HomeCSS.container_variation: ''}`}>
                <div className={HomeCSS.container__children}>
                    
                    <h2 className={HomeCSS.h2} style={{ transform: `translateX(-${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 1s ease' }}>Cybersecurity</h2>
                    <h2 className={`${HomeCSS.h2} ${HomeCSS.variant} ${containerChangeIsVisible ? HomeCSS.moveRight : ''}`} style={{ transform: `translateX(+${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 2s ease' }}>Student <IoCubeOutline className={HomeCSS.block} size={80} color='#8ca0b2'/></h2>
                    <h2 className={`${HomeCSS.h2} ${containerChangeIsVisible ? HomeCSS.moveLeft : ''}`} style={{ transform: `translateX(-${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 2s ease' }}>& Blockchain</h2>
                    <h2 className={`${HomeCSS.h2} ${HomeCSS.variant}  ${containerChangeIsVisible ? HomeCSS.moveRight : ''}`} style={{ transform: `translateX(+${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 2s ease' }}>Developer</h2>
                    <h2 className={HomeCSS.paragraph} style={{ transform: `translateX(-${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 2s ease' }}>Based in <span style={{ color:'#00a9006b'}}>It</span><span>a</span><span style={{color:'#dc00007d',marginLeft:3}}>ly</span></h2>
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
                    <h2 className={HomeCSS.h2} style={{ transform: `translateX(-${scrollTop}px) translateY(-${scrollTop}px)`, transition: 'transform 0.5s ease' }}>Cybersecurity</h2>
                    <h2 className={`${HomeCSS.h2} ${HomeCSS.variant} ${containerChangeIsVisible ? HomeCSS.moveRight : ''}`} style={{  transform: `translateX(+${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 0.5s ease' }}>Student <IoCubeOutline className={HomeCSS.block} size={80} color='#8ca0b2'/></h2>
                    <h2 className={`${HomeCSS.h2} ${containerChangeIsVisible ? HomeCSS.moveLeft : ''}`} style={{ transform: `translateX(-${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 0.5s ease'}}>& Blockchain</h2>
                    <h2 className={`${HomeCSS.h2} ${HomeCSS.variant}  ${containerChangeIsVisible ? HomeCSS.moveRight : ''}`} style={{ transform: `translateX(+${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 0.5s ease'}}>Developer</h2>
                    <h2 className={HomeCSS.paragraph} style={{  transform: `translateX(-${scrollTop}px) translateY(-${scrollTop}px`, transition: 'transform 0.5s ease'}}>Based in <span style={{ color:'#00a9006b'}}>It</span><span>a</span><span style={{color:'#dc00007d',marginLeft:3}}>ly</span></h2>
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
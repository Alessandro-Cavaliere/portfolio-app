import HomeCSS from "../styles/home.module.css"
import mePhoto from "../assets/me.png"
import mouseScroll from "../assets/mouse_scroll.gif"
import Navbar from './Navbar';
import { useEffect, useState } from 'react';

const DEFAULT_SCROLL_GAP = 80

export default function Home(){
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
    return (
        <>
            <Navbar/>
            <div className={HomeCSS.container}>
                <div className={HomeCSS.container__children}>
                    <h2 className={HomeCSS.h2}>Cybersecurity</h2>
                    <h2 className={HomeCSS.h2}>
                        Student 
                    </h2>
                    <h2 className={HomeCSS.h2}>
                        & Blockchain
                    </h2>
                    <h2 className={HomeCSS.h2}>
                        Developer
                    </h2>
                    <h2 className={HomeCSS.h2}>Based in <span style={{ color: '#00a9006b' }}>It</span><span>a</span><span style={{ color: '#dc00007d', marginLeft: 3 }}>ly</span></h2>
                    <div className={HomeCSS.div_mouse_style}>
                        <div className={HomeCSS.mousey}>
                            <div className={HomeCSS.scroller}></div>
                        </div>
                    </div>
                </div>
                <img src={mePhoto} className={HomeCSS.image_style} />
            </div>
        </>
    );
}
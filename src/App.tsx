import './app.scss'
import Navbar from './components/navbar/Navbar';
import Cursor from './components/cursor/Cursor';
import PotraitView from './components/potraitview/PortraitView';
import Parallax from './components/parallax/Parallax';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

/**
 * App.tsx component -> main component of the application that renders all the other components
 * @returns JSX.Element that represents the main component of the application
 */
function App() {
  return (
    <>
       <div>
        <Cursor />
        <section id="Homepage">
          <Navbar />
          <PotraitView />
        </section>
        {/* <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services />
        </section> */}
        <section id="Projects">
          <Parallax type="projects" />
        </section>
        <Projects />
        <section id="Contact">
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App

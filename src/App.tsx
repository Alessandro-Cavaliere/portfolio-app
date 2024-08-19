// App.tsx
import { useState } from 'react';
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Cursor from './components/cursor/Cursor';
import PotraitView from './components/potraitview/PortraitView';
import Parallax from './components/parallax/Parallax';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Experiences from './components/experiences/Experiences';
import Preloader from './components/preloader/Preloader';

/**
 * App.tsx component -> main component of the application that renders all the other components
 * @returns JSX.Element that represents the main component of the application
 */
function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false); // Hide the preloader and show the content
  };

  return (
    <>
      {loading ? (
        <Preloader onComplete={handleLoadingComplete} />
      ) : (
        <div className="app-content">
          <Cursor />
          <section id="Homepage">
            <Navbar />
            <PotraitView />
          </section>
          <section id="Experiences">
            <Parallax type="experiences" />
          </section>
          <section>
            <Experiences />
          </section>
          <section id="Projects">
            <Parallax type="projects" />
          </section>
          <Projects />
          <section id="Contact">
            <Contact />
            <p className="copyright">Copyright © 2024 All copyrights reserved to Alessandro Cavaliere</p>
          </section>
        </div>
      )}
    </>
  );
}

export default App;

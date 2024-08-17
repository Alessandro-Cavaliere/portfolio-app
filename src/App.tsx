import './app.scss'
import Navbar from './components/navbar/Navbar';
import Cursor from './components/cursor/Cursor';

/**
 * App.tsx component -> main component of the application that renders all the other components
 * @returns JSX.Element that represents the main component of the application
 */
function App() {
  return (
    <>
      <Cursor />
      <section id="Homepage">
        <Navbar />
      </section>
    </>
  )
}

export default App

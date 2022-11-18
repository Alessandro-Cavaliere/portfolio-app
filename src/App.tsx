import './App.css';
import { BrowserRouter as Router,Route, Routes, useRoutes } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home /> },
      { path: "component2", element: <></> },
    ]);
    return routes;
  };

  return (
    <Router>
      <Navbar/>
       <AppRoutes/>
    </Router>
  );
}

export default App;

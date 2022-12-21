import './App.css';
import { BrowserRouter as Router, Outlet, useRoutes } from 'react-router-dom';
import Home from './components/Home';
import { WavyContainer, WavyLink } from 'react-wavy-transitions';

function App(){

  
  const AppRoutes = () => {
    let routes = useRoutes([
      { path: "/", element: <Home/> },
    ]);
    return routes;
  };

  return (
    
    <Router>
      <WavyContainer />
      <AppRoutes/>
    </Router>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Home from './screens/Home/Home';
import Map from './Components/Map/Map.jsx';
import ShopCard from './Components/ShopCard/ShopCard';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/map" element={<ShopCard/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

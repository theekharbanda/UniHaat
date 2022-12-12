import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import Home from './screens/Home/Home';


function App() {
  return (
    <div className="App">
      <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
        <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
        {/* <Footer/> */}
    </div>
  );
}

export default App;

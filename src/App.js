
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./component/Navbar/Navbar"
import Loginsignup from "./page/Loginsignup"
import Home from "./page/Home"
import Information from "./page/Information"
import Start from "./page/Start"
import Result  from "./page/Result"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/Information" element={<Information/>} />
         <Route path="/Start" element={<Start/>} />
         <Route path="/Result" element={<Result/>} />
         <Route path="/login" element={<Loginsignup />} />
        </Routes>
      
      </BrowserRouter>


    </div>
  );
}

export default App;

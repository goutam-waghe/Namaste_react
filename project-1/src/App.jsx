import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

import Fooditems from "./components/Fooditems";

import "./styles/App.scss"
import Contact from "./components/Contact";
import Footer from "./components/Footer";



export function App() {
  return <>
  <Router>
<Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      
      <Route path="/menu" element={<Fooditems/>}/>
      <Route path="/contact" element={<Contact/>}/>
      
    
    </Routes>
    <Footer/>
  </Router>
  </>
}

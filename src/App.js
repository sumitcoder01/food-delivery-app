import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './components/Cart';


export default function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>   
            <Route exact path="/login" element={<Login/>}/>   
            <Route exact path="/signup" element={<Signup/>}/>   
            <Route exact path="/cart" element={<Cart/>}/>   
        </Routes>
       <Footer/>
    </Router>
    </>
  )
}

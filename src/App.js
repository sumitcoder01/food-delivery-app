import React from 'react';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import MyOrder from './screens/MyOrder';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cart from './screens/Cart';
import AdminPortal from './screens/AdminPortal';


export default function App() {
  return (
    <>
    <Router>
        <Navbar/>
        <ToastContainer/>
        <Routes>
            <Route exact path="/" element={<Home/>}/>   
            <Route exact path="/login" element={<Login/>}/>   
            <Route exact path="/signup" element={<Signup/>}/>   
            <Route exact path="/cart" element={<Cart/>}/>   
            <Route exact path="/myorder" element={<MyOrder/>}/>   
            <Route exact path="/adminportal" element={<AdminPortal/>}/>   
        </Routes>
       <Footer/>
    </Router>
    </>
  )
}

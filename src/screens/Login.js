import React, { useState } from 'react';
import { toast } from "react-toastify";
import {useNavigate} from "react-router-dom"
import { useGlobalContext } from '../context/cart/CartState';
import {HOST} from '../constant/constant';
export default function Login() {
  const {updateAuthenicated} =useGlobalContext();
  const navigate = useNavigate();
  const host = HOST;
  const [formData,setFormData]=useState({
   email:'',
   password:''
  });
  const handleOnChange=(e)=>{
   setFormData({...formData,[e.target.name]:e.target.value});
  }  
  const handleOnSubmit= async(e)=>{
     e.preventDefault();
     try {
       const response = await fetch(`${host}/api/auth/login`, {
           method: "POST",
           headers: {
               "Content-Type": "application/json",
           },
           body:JSON.stringify(formData),
       });
       const res = await response.json();
       if(res.success){
         localStorage.setItem('authToken',res.authToken);
         toast.success("Authentication Successful!");
         updateAuthenicated();
         navigate("/")
       }
       else{
        console.log("Server Error!");
        toast.error("Authentication error!");
       }
   } catch (error) {
       console.log("Internal Server ", error);
       toast.error("Internal Server!");
   }
    }
    return (
        <div className="container mt-5 mb-3" style={{minHeight:'62vh'}}>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" minLength={5} className="form-control bg-dark text-white border border-success fst-italic" value={formData.name} onChange={handleOnChange} id="email" name="email" aria-describedby="emailHelp" style={{boxShadow: 'none'}} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" minLength={5} className="form-control bg-dark text-white border border-success fst-italilc" value={formData.name} onChange={handleOnChange} name='password' id="password" style={{boxShadow: 'none'}} />
          </div>
          <div className="d-flex">
             <button type="submit" className="btn btn-success mt-2">Submit</button>
             <button onClick={()=>navigate("/signup")} className="btn btn-danger mt-2 mx-3">New User?</button>
          </div>
        </form>
        </div>
    )
}

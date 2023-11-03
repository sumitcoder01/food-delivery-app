import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { useGlobalContext } from '../context/cart/CartState';
export default function Signup() {
  const {updateAuthenicated} =useGlobalContext();
  const navigate = useNavigate();
  const host = "http://localhost:5000";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${host}/api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const res = await response.json();
      if (res.success) {
        localStorage.setItem('authToken', res.authToken);
        updateAuthenicated();
        navigate("/");
      }
      else console.log("Server Error!");
    } catch (error) {
      console.log("Internal Server ", error);
    }
  }
  return (
    <div className="container mt-5 mb-3" style={{ minHeight: '62vh' }}>
      <form onSubmit={handleOnSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" minLength={5} className="form-control bg-dark text-white border border-success fst-italic" value={formData.name} onChange={handleOnChange} id="name" name="name" style={{ boxShadow: 'none' }} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" minLength={10} className="form-control bg-dark text-white border border-success fst-italic" value={formData.email} onChange={handleOnChange} id="email" name="email" aria-describedby="emailHelp" style={{ boxShadow: 'none' }} />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" minLength={5} className="form-control bg-dark text-white border border-success fst-italilc" value={formData.password} onChange={handleOnChange} name='password' id="password" style={{ boxShadow: 'none' }} />
        </div>
        <div className="d-flex">
             <button type="submit" className="btn btn-success mt-2">Submit</button>
             <button onClick={()=>navigate("/login")} className="btn btn-danger mt-2 mx-3">Already Signup ?</button>
          </div>
      </form>
    </div>
  )
}

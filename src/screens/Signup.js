import React, { useState } from 'react';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import { HOST } from '../constant/constant';
import { HypnosisLoader } from '../components/loaders/HypnosisLoader';

export default function Signup() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const host = HOST;
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
    if (loading) return;
    setLoading(true);
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
        toast.success("Signup Successful!");
        navigate("/login");
      }
      else {
        console.log("Server Error!");
        toast.error("Authentication error!");
      }
    } catch (error) {
      console.log("Internal Server ", error);
      toast.error("Internal Server!");
    }
    setLoading(false);
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
          <button type="submit" className="btn btn-success mt-2">{loading ? <HypnosisLoader /> : "Submit"}</button>
          <button onClick={() => navigate("/login")} className="btn btn-danger mt-2 mx-3">Already Signup ?</button>
        </div>
      </form>
    </div>
  )
}

import React from 'react'

export default function Login() {
    return (
        <div className="container mt-5 mb-3" style={{minHeight:'62vh'}}>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control bg-dark text-white border border-success fst-italic" id="email" name="email" aria-describedby="emailHelp" style={{boxShadow: 'none'}} />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control bg-dark text-white border border-success fst-italilc" name='password' id="password" style={{boxShadow: 'none'}} />
          </div>
          <button type="submit" className="btn btn-success mt-2">Submit</button>
        </form>
        </div>
    )
}

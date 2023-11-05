import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../context/cart/CartState';

function Navbar() {
  const {cart,clearCart,authenticated,updateAuthenicated} =useGlobalContext();
const handleOnLogout=(e)=>{
      localStorage.removeItem('authToken');
      clearCart();
      updateAuthenicated();
 }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success">
      <div className="container-fluid">
        <NavLink className="navbar-brand me-5" to="/">
          <span className="fw-bold fst-italic fs-3">FoodieDash</span>
        </NavLink>
        <NavLink className="nav-link me-3" aria-current="page" to="/">
          Home
        </NavLink>
        {authenticated && <NavLink className="nav-link me-3" to="/myorder">
          My Order
        </NavLink>}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {
              authenticated ? <>
                <NavLink className="nav-link" to="/cart">
                  <button className="btn btn-light text-success px-3">My Cart <span className="badge rounded-5 text-bg-danger">{cart.length}</span></button>
                </NavLink>
                <NavLink className="nav-link" >
                  <button className="btn btn-outline-light px-3" style={{
                    color: '#dc3545',
                    backgroundColor: '#f8f9fa',
                    transition: 'background-color 0.3s',
                  }}
                    onClick={handleOnLogout}
                    onMouseEnter={(e) => {e.target.style.backgroundColor = '#dc3545';e.target.style.color='#f8f9fa'}}
                    onMouseLeave={(e) => {e.target.style.backgroundColor = '#f8f9fa';e.target.style.color='#dc3545'}}>Logout</button>
                </NavLink>
              </> : <><NavLink className="nav-link" to="/login">
                <button className="btn btn-outline-light px-3">Login</button>
              </NavLink>
                <NavLink className="nav-link" to="/signup">
                  <button className="btn btn-outline-light px-3">Signup</button>
                </NavLink>
              </>
            }

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


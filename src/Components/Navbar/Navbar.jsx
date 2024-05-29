import React from "react";
import logo from "../../Assets/logo.jpg";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="menu">
          <p>Home</p>
          <p>Services</p>
          <p>Cart</p>
          <p>Help</p>
          <div className="button">
            <button>Login</button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

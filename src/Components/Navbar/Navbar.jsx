import React, { useContext } from "react";
import "./Navbar.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import FiberManualRecordOutlinedIcon from "@mui/icons-material/FiberManualRecordOutlined";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Cartcontext";

const Navbar = () => {
  const { cartItemCount } = useContext(CartContext);

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <h2>E-commerce</h2>
        </div>
        <div className="navigations">
          <div className="icon-text">
            <AccountCircleRoundedIcon />
            <p>Login</p>
          </div>
          <Link to="/cart" className="nav-button">
            <div className="cart-icon-container">
              <AddShoppingCartIcon />
              <div className="cart-count">
                <FiberManualRecordOutlinedIcon />
                <span className="cart-count-text">{cartItemCount}</span>
              </div>
            </div>
            <p>Cart</p>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

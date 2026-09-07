import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(cartContext);
  return (
    <div className="navbar">
      <img src={logo} alt="logo"  className="logo"/>
      
     <div className="links">
      <NavLink to="/">Home</NavLink>
       <NavLink to="/products">Products</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/cart">🛒 Cart ({cartItems.length})</NavLink>
     </div>
    </div>
  );
};

export default Navbar;
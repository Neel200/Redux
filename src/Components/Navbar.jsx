import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
export default function Navbar(){
    const {cart}=useSelector((state)=>state);
    return(
        <div className="navbar-container">
            <nav className="navbar">
                <NavLink to="/">
                    <div className="navbar-logo-link">
                        <img src={logo} 
                        className="navbar-logo"/>                 
                    </div>
                </NavLink>
                <div className="navbar-links">   
                    <NavLink to="/" className="navbar-link">
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart" 
                    className="navbar-cart-link">
                        <div className="cart-icon-wrapper">
                            <FaShoppingCart 
                            className="cart-icon"/>
                            {
                                cart.length>0 && (
                                    <span className="cart-count">
                                        {cart.length}</span>
                                )
                            }
                        </div>
                    </NavLink>
                </div>
            </nav>  
        </div>
    );
}
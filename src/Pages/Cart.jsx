import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../Components/CartItem";
export default function Cart(){
    const {cart}=useSelector((state)=>state);
    const [totalAmount,setTotalAmount]=useState(0);
    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=>acc+
        curr.price,0));
    },[cart])
    return(
        <div className="cart-container">
            {
                cart.length>0 ? 
                (<div className="cart-filled">
                    <div className="cart-items">
                        {
                            cart.map((item,index)=>{
                                return <CartItem 
                                key={item.id} item={item}
                                itemIndex={index}/>
                            })
                        }
                    </div>
                    <div className="cart-summary">
                        <div className="cart-summary-header">
                            <h1>Your Cart</h1>
                            <br></br>
                            <p>
                                <span className="total-items">
                                    Total Items: {cart.length}
                                </span>
                            </p>
                        </div>
                        <div className="cart-total">
                            <p>Total Amount: ${totalAmount}</p>
                            {/*<button className="checkout-btn">
                                Checkout Now</button>*/}
                        </div>
                    </div>
                </div>):
                (<div className="cart-empty">
                    <h1>Cart Empty</h1>
                    <Link to={"/"}>
                        <button className="shop-btn">
                            Shop Now
                        </button>
                    </Link>
                </div>)
            }
        </div>
    );
}
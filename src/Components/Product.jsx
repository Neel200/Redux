import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {add,remove} from "../Redux/Slices/CartSlice";
export default function Product({post}){
    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();
    const addToCart=()=>{
        dispatch(add(post));
        toast.success("Item added to cart");
    }
    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.success("Item removed from cart");
    }
    return(
        <div className="product-card">
            <div className="product-title">
                <p>{post.title}</p>
            </div>
            <div className="product-description">
                <p>{post.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
            </div>
            <div className="product-image">
                <img src={post.image}/>
            </div>
            <div className="product-footer">
                <p className="product-price">${post.price}</p>
                {
                    cart.some((p)=>p.id==post.id) ?
                    (<button className="product-btn"
                    onClick={removeFromCart}>
                        Remove Item</button>):
                    (<button className="product-btn"
                    onClick={addToCart}>
                        Add to Cart</button>)
                }
            </div>
        </div>
    );
}
import React from "react";
import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { remove } from "../Redux/Slices/CartSlice";
export default function CartItem({item,itemIndex}) {
    const dispatch=useDispatch()
    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.success("Item removed");
    };
    return(
        <div className="cart-item">
            <div className="cart-item-img">
                <img src={item.image} alt={item.title} />
            </div>
            <div className="cart-item-details">
                <h1 className="cart-item-title">{item.title}</h1>
                <p className="cart-item-desc">{item.description}</p>
                <div className="cart-item-footer">
                    <p className="cart-item-price">${item.price}</p>
                    <div className="cart-item-remove" onClick={removeFromCart}>
                        <FcDeleteDatabase />
                    </div>
                </div>
            </div>
        </div>
    );
}

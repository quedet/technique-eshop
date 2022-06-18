import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

export default function AddToCartButton ({ product, quantity}) {
    const { setCart, cart } = useContext(CartContext)

    console.log(cart);
    const addToCart = () => {
        const data = {
            ...product,
            quantity
        }
        setCart(state => ([...state, data]))
        
        // cart.forEach(item => {
        //     if (item.name === data.name) {
        //         item.quantity += data.quantity
        //     } else {
        //     setCart(state => ([...state, data]))
        //     }
        // })
    }


    return (
        <input type="submit" value="ADD TO CART" onClick={addToCart}/>
    )
}
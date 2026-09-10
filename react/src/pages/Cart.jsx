import CartItem from "../components/CartItem";
import { use, useContext, useMemo } from "react";
import "./Cart.css";
import { cartContext, cartActionsContext } from "../Context/CartContext";
import { useCallback } from "react";

const Cart = () => {

  const  cartItems  = useContext(cartContext);
  const setCartItems = useContext(cartActionsContext);

const removeItem = useCallback((id) =>{
  setCartItems((prevItems) => {
    return prevItems.filter((item) => item.id !== id);
  });
},[]) 

const increaseQuantity = useCallback((id) => {
  setCartItems((prevItems) => {
    return prevItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      } else {
        return item;
      }
    });
  });
}, []);

const decreaseQuantity = useCallback((id) =>{
  setCartItems((prevItems)=>{
   return prevItems.filter((item) => {
     return !(item.id === id && item.quantity === 1);
    })
  .map((item)=>{
    if(item.id === id){
      return {
        ...item,
        quantity: item.quantity - 1
      };
    }
    else {
     return item;
    }
  }) })},[])

const totalPrice = useMemo(()=>{
  return cartItems.reduce((total, item) => {
    return total + (item.priceCents * item.quantity)
  }, 0);
},[cartItems])


 const card = cartItems.map((item)=>{
  return (
    <CartItem
      key={item.id}
      product={item}
      quantity={item.quantity}
      removeItem={removeItem}
      increaseQuantity={increaseQuantity}
     decreaseQuantity={decreaseQuantity}
    />
  )
 })
  return (
    <div className="cart-page">

    <div className="cart-header">
      <h1>Your Shopping Cart</h1>
      <p>Review your selected products before checkout.</p>
    </div>

    {cartItems.length === 0 ? (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <p>Add some products to your cart to see them here.</p>
      </div>
    ) : (
      <div className="total-price">
        {card} 
        <p>Total Price: ${totalPrice}</p> 
       </div>
    )}

  </div>
  )
}

export default Cart;

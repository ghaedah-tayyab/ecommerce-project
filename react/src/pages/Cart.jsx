import CartItem from "../components/CartItem";
import { useContext } from "react";
import "./Cart.css";
import { cartContext } from "../Context/CartContext";

const Cart = () => {

  const { cartItems, setCartItems } = useContext(cartContext);

const removeItem = (id) =>{
   setCartItems(cartItems.filter((item)=>{
    return item.id !== id 
   }));
}

const increaseQuantity = (id) =>{
  setCartItems(
    cartItems.map((item)=>{
      if(item.id === id){
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      else {
       return item;
      }
    }) 
  )
}

const decreaseQuantity = (id) =>{
  setCartItems(
    cartItems
      .filter((item) => {
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
    }) 
  )
};

const totalPrice = cartItems.reduce((total, item) => {
  return total + (item.priceCents * item.quantity)
}, 0);


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

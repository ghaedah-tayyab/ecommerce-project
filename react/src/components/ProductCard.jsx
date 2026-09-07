import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../Context/CartContext";
import "./ProductCard.css";
import { useState } from "react";

const ProductCard = ({ product }) => {
  const { cartItems, setCartItems } = useContext(cartContext);
  const [added, setAdded] = useState(false);

  const addToCart = (e) => {
    e.preventDefault();

    const alreadyIncart = cartItems.some(
      (item) =>  item.id === product.id
    );
    if(alreadyIncart){
      setCartItems(
        cartItems.map((item)=>{
          if(item.id === product.id){
            return {
              ...item,
              quantity: item.quantity + 1
            }
           
          };
          return item;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1
        }
      ]);
    }

    setAdded(true);
  };


  return (
    <Link className="product-card-link" to={`/products/${product.id}`}>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>${product.priceCents}</p>
        <button onClick={addToCart}>
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </Link>
    
  );
};

export default ProductCard;
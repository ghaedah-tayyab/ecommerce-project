import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartActionsContext } from "../Context/CartContext";
import "./ProductCard.css";
import { useState, memo } from "react";

const ProductCard = ({ product }) => {
  const setCartItems  = useContext(cartActionsContext);
  const [added, setAdded] = useState(false);

  const addToCart = (e) => {
    e.preventDefault();
    setCartItems((prevItems) => {
      const alreadyIncart = prevItems.some(
        (item) => item.id === product.id
      );
    
      if (alreadyIncart) {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });

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

export default memo(ProductCard);
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { cartActionsContext } from "../Context/CartContext";
import useFetchProduct from "../hooks/useFetchProducts";

import "./ProductDetails.css";

const ProductDetails = () => {
  const { products, loading, error } = useFetchProduct();
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  const setCartItems  = useContext(cartActionsContext);


  if (loading === true) {
    return <p>Product is loading</p>
  };

  if (error!= ""){
    return <p>{error}</p>
  }


  const details = useParams()
  const product = products.find((product) => {
  return  product.id === details.id
});

if (!product){
  return <p>Product not found</p>
}
const addToCart = () => {
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
  <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image"/>
      <div className="products">
      <h3>Title: {product.name}</h3>
      <p>Price: ${product.priceCents}</p>
     
    <div className="button-container">

      <button onClick={addToCart} className="add-button">
       {added ? "Added ✓" : "Add to Cart"}
      </button>

      <button
        onClick={() => navigate("/products")}
        className="back-button"
      >
        Back to Products
     </button>

    </div>
    
      </div>
    </div>
  )
}

export default ProductDetails;
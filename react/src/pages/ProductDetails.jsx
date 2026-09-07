import { useParams, useNavigate } from "react-router-dom";
import useFetchProduct from "../hooks/useFetchProducts";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { products, loading, error } = useFetchProduct();
  const navigate = useNavigate();

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
 
  return (
  <div className="product-details">
      <img src={product.image} alt={product.title} className="product-image"/>
      <div className="products">
      <h3>Title: {product.name}</h3>
      <p>Price: ${product.priceCents}</p>
      <button onClick={() => navigate("/products")} 
       className="back-button">
        Back to Products
      </button>
      </div>
    </div>
  )
}

export default ProductDetails;
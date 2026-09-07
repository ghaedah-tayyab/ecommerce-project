import { useState, useEffect } from "react";


const useFetchProduct = () =>{
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
useEffect(() => {
  const fetchProduct = async () =>{
    try {
        const response = await fetch("https://kolzsticks.github.io/Free-Ecommerce-Products-Api/main/products.json");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
    } catch (error) {
        setError("Failed to fetch Products");
        setLoading(false);
    }
  }
  fetchProduct();
}, []);
return ({ loading, products, error });


}

export default useFetchProduct;


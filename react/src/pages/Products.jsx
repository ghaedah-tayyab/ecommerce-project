import  { useState } from 'react';
import SearchBar from '../components/SearchBar';
import useFetchProduct from '../hooks/useFetchProducts';
import "./Products.css";
import ProductCard from "../components/ProductCard";;


const Products = () => {
  const {products, loading, error}  = useFetchProduct();
  const [search, setSearch] = useState("");

  if (loading === true) {
    return <p>Product is loading</p>
  };

  if (error!= ""){
    return <p>{error}</p>
  }


  const filteredproducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });
  return (
    <div className="products-container">
     <SearchBar setSearch={setSearch} />
      <div className="products-grid">
       {filteredproducts.map((product)=>{
        return <ProductCard key={product.id} product={product}/>;
       })}
       </div>
    </div>
  )
}

export default Products;

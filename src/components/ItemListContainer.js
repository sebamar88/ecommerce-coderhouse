import Product from "./Product";
import { useState, useEffect } from "react";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const API = async () => {
      const url = "https://api-furnistar.prestoapi.com/api/products";
      const response = await fetch(url);
      const apiProducts = await response.json();
      setProducts(apiProducts);
    };
    API();
  }, []);
  return (
    <div className="row">
      {products.length > 1
        ? products.map((product) => <Product key={product.id} item={product} />)
        : null}
    </div>
  );
};

export default ItemListContainer;

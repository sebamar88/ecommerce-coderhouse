import { useState, useEffect } from "react";
import Layout from "./components/UI/Layout";
import Product from "./components/Product";

function App() {
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
    <Layout>
      <div className="row">
        {products.length > 1
          ? products.map((product) => (
              <Product key={product.id} item={product} />
            ))
          : null}
      </div>
    </Layout>
  );
}

export default App;

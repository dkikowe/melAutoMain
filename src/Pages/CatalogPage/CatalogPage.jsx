import { useState, useEffect } from "react";

import Product from "../../components/Product/Product";

import "./CatalogPage.css";

const CatalogPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://melautobackend-production.up.railway.app/get")
      .then((response) => response.json())
      .then((data) => setProducts(data["cars"]))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  console.log(products);

  return (
    <>
      <div>
        <div className="catalog">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CatalogPage;

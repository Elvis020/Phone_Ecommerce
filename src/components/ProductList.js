import React, { useState, useContext } from "react";
import Title from "./Title";
import { useElvisContext } from "../Context_Api";
import Product from './Product'

const ProductList = () => {
  const { products} = useElvisContext();
  console.log(products);
  return (
    <>
      <div className="py-5">
        <div className="container">
          <Title name="our" title="products" />
          <div className="row">
              {products.map(prod => (
                <Product key={prod.id} products={prod} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;

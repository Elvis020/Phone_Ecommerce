import React, { createContext, useState, useContext, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);

  const getItem = (id) => {
    const productId = products.find((item) => item.id === id);
    return productId;
  };

  useEffect(() => {
    productsCopy();
  }, []);

  const productsCopy = () => {
    let tempProducts = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    setProducts(tempProducts);
  };
  const handleDetail = (id) => {
    const selectedProduct = getItem(id);
    setDetails(selectedProduct);
  };

  const addToCart = (id) => {
    let tempProducts = [...products];
    const index = tempProducts.indexOf(getItem(id));
    const addedProduct = tempProducts[index];
    addedProduct.inCart = true;
    addedProduct.count = 1;
    const price = addedProduct.price;
    addedProduct.total = price;
    setCart([...cart, addedProduct]);
  };

  const openModal = (id) => {
    const selectedProduct = getItem(id);
    setModalProduct(selectedProduct);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    console.log("Cart:", cart);
  }, [addToCart]);

  return <ProductContext.Provider value={{ closeModal, openModal, products, details, cart, modalProduct, modalOpen, handleDetail, addToCart }}>{children}</ProductContext.Provider>;
};

// Custom Hooks
export const useElvisContext = () => {
  return useContext(ProductContext);
};

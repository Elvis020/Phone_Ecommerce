import React, { createContext, useState, useContext, useEffect } from "react";
import { storeProducts, detailProduct } from "../data";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [details, setDetails] = useState(detailProduct);
  const [cart, setCart] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(detailProduct);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

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

  const increment = (id) => {
    console.log("Increment here 👋");
  };
  const decrement = (id) => {
    console.log("Decrement here 👋");
  };
  const removeItem = (id) => {
    console.log("Item removed 🤩");
  };
  const clearCart = () => {
    setCart([]);
    productsCopy();
  };
  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => (subTotal += item.total));
    // NB: Tax rate used here is 10%
    const tempTax = subTotal * .1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubtotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  }

  useEffect(() => {
    addTotals(); 
  }, [addToCart]);
  
  
  useEffect(() => {
    addTotals(); 
  }, [cart]);

  return <ProductContext.Provider value={{ cartTotal, cartTax, cartSubtotal, closeModal, openModal, products, details, cart, modalProduct, modalOpen, handleDetail, addToCart, increment, decrement, removeItem, clearCart }}>{children}</ProductContext.Provider>;
};

// Custom Hooks
export const useElvisContext = () => {
  return useContext(ProductContext);
};

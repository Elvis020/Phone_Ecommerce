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
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count += 1;
    product.total = product.count * product.price;
    setCart([...tempCart]);
  };

  const decrement = (id) => {
    let tempCart = [...cart];
    const selectedProduct = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count -= 1;
    if (product.count === 0) {
      removeItem(id);
    } else {
      product.total = product.count * product.price;
      setCart([...tempCart]);
    }
  };

  const removeItem = (id) => {
    let tempProducts = [...products];
    let tempCart = [...cart];
    tempCart = tempCart.filter((item) => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    const removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setCart([...tempCart]);
    setProducts([...tempProducts]);
  };

  useEffect(() => {
    addTotals();
  }, [removeItem]);
  const clearCart = () => {
    setCart([]);
    productsCopy();
  };
  const addTotals = () => {
    let subTotal = 0;
    cart.map((item) => (subTotal += item.total));
    // NB: Tax rate used here is 10%
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    setCartSubtotal(subTotal);
    setCartTax(tax);
    setCartTotal(total);
  };

  // useEffect(() => {
  //   addTotals();
  // }, []);
  useEffect(() => {
    addTotals();
  }, [increment, decrement]);
  useEffect(() => {
    addTotals();
  }, [cart, addToCart]);

  return <ProductContext.Provider value={{ cartTotal, cartTax, cartSubtotal, closeModal, openModal, products, details, cart, modalProduct, modalOpen, handleDetail, addToCart, increment, decrement, removeItem, clearCart }}>{children}</ProductContext.Provider>;
};

// Custom Hooks
export const useElvisContext = () => {
  return useContext(ProductContext);
};

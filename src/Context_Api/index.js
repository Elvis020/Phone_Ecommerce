import React,{ createContext,useState,useContext } from 'react';
import { storeProducts, detailProduct } from "../data";



const ProductContext = createContext()

export const ProductProvider = ({children}) => {
      const [state, setState] = useState({
        products: storeProducts,
        details: detailProduct
      });

      const handleDetail = () => {
        console.log('Hello from handle detail');
      }
      const addToCart = () => {
        console.log('Hello from add To cart');
      }


    return (
        <ProductContext.Provider value={{...state,handleDetail,addToCart}}>
            {children}
        </ProductContext.Provider>
    )
}

// Custom Hooks
export const useElvisContext = () => {
  return useContext(ProductContext);
};


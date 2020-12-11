import React from "react";
import CartItem from "./CartItem";

const CartList = ({value,otherValues}) => {
  return (
    <div className="container-fluid">
      {value.map((item) => (
        <CartItem item={item} key={item.id} otherValues={otherValues} />
      ))}
    </div>
  );
};

export default CartList;

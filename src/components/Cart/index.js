import React from "react";
import Title from "../Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import CartList from "./CartList";
import { useElvisContext } from "../../Context_Api";
import CartTotals from "./CartTotals";

const Cart = () => {
  const { ...items } = useElvisContext();
  const {cart,increment,decrement} = items;
  return (
    <section>
      {(cart.length && (
        <>
          <Title name="your" title="cart" />
          <CartColumns />
          <CartList value={cart} otherValues={items} />
          <CartTotals otherValues={items} />
        </>
      )) || <EmptyCart />}
    </section>
  );
};

export default Cart;

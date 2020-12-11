import React from "react";
import { Link } from "react-router-dom";

const CartTotals = ({ otherValues }) => {
  const { cartSubtotal, cartTax, cartTotal, clearCart } = otherValues;
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10-mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to='/'>
              <button className="btn btn-outline-danger text-uppercase mb-3 px-3" onClick={() => clearCart()} type="button">
                clear cart
              </button>
            </Link>
            <h5><span className="text-title-2">subtotal: <strong>$ {cartSubtotal}</strong></span></h5>
            <h5><span className="text-title-2">tax: <strong>$ {cartTax}</strong></span></h5>
            <h5><span className="text-title-2">Total: <strong>$ {cartTotal}</strong></span></h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartTotals;
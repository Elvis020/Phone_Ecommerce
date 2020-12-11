import React from "react";
import { Link } from "react-router-dom";
import { ProductsWrapper } from "./Styled_Components";
import { PropTypes } from "prop-types";
import { FaCartPlus } from "react-icons/fa";
import { useElvisContext } from "../Context_Api";

const Product = ({ products }) => {
  const { id, title, img, price, inCart } = products;
  const { handleDetail, addToCart, openModal } = useElvisContext();
  const handleAddToCart = (id) => {
    addToCart(id);
    openModal(id);
  };

  return (
    <ProductsWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <div className="img-container p-5" onClick={() => handleDetail(id)}>
          <Link to="/details">
            <img src={img} alt={title} className="card-img-top" />
          </Link>
          <button className="cart-btn" disabled={inCart && true} onClick={() => handleAddToCart(id)}>
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                {" "}
                inCart
              </p>
            ) : (
              <FaCartPlus />
            )}
          </button>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0"> {title} </p>
          <h5 className="text-blue font-italic mb-0">
            {" "}
            <span className="mr-1">${price}</span>{" "}
          </h5>
        </div>
      </div>
    </ProductsWrapper>
  );
};

// Defining Proptypes
Product.propTypes = {
  products: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }),
};

export default Product;

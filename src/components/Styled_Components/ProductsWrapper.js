import styled from "styled-components";

const ProductsWrapper = styled.nav`
  .card {
    border-color: transparent;
    transition: all 0.3s linear;
  }
  .card-footer {
    background: transparent;
    border-top: 1px solid #d6dbd2;
    transition: all 0.3s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: #d6dbd2;
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .card-img-top {
    transition: all 0.3s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius:.5rem 0 0 0;
    transform: translateY(100%)
  }
  .img-container:hover .cart-btn{
      transform: translateY(0);
    transition: all 0.3s linear;
  }
  .cart-btn:hover{
      color:var(--mainBlue);
      cursor: pointer;
  }
`;

export default ProductsWrapper;

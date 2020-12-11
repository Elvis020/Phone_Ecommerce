import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { FaCartPlus } from "react-icons/fa";
import { ButtonContainer, NavWrapper } from "./Styled_Components";

const Navbar = () => {
  return (
    <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="Logo" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link className="nav-link" to="/">
            Products
          </Link>
        </li>
      </ul>

      <Link to="/cart" className="ml-auto">
        <ButtonContainer>
          <span className="mr-2">
            <FaCartPlus />
          </span>
          My Cart
        </ButtonContainer>
      </Link>
    </NavWrapper>
  );
};

export default Navbar;

import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

function Navigation(props) {
  const cart = props.cart;
  // updating cart count
  // const cartCount = useEffect(() => {
  //   const cartCounter = cart.length;
  //   return () => cartCounter;
  // }, cart);
  return (
    <>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

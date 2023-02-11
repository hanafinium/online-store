import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
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

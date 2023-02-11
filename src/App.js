import React, { useState } from "react";
import "./index.css";
import { Route } from "react-router-dom";
import Cart from "./components/Cart";
import Products from "./components/Products";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div>
      <Route
        exact
        path="/"
        render={() => <Products cart={cart} setCart={setCart} />}
      />
      <Route
        exact
        path="/cart"
        render={() => <Cart setCart={setCart} cart={cart} />}
      />
    </div>
  );
}

export default App;

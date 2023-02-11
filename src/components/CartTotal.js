import React from "react";

function CartTotal(props) {
  const cart = props.cart;
  let prices = [];
  cart.forEach((item) => {
    prices.push(item.price);
  });
  const pricesTotal = prices.reduce((sum, current) => sum + current, 0);
  const total = pricesTotal.toFixed(2);
  return (
    <div>
      <h1>Total: {total}</h1>
    </div>
  );
}

export default CartTotal;

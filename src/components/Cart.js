import CartTotal from "./CartTotal";
import Navigation from "./Navigation";

function Cart(props) {
  const { cart, setCart } = props;
  console.log(cart);
  return (
    <div>
      <Navigation />
      <div className="cart-page">
        <section className="cart-content">
          {cart.map((item, index) => {
            if (cart.length > 0) {
              return (
                <section key={index}>
                  <div className="cart-item">
                    <div className="item-details">
                      <p>{item.name}</p>
                      <p>
                        <span>$</span>
                        {item.price}
                      </p>
                    </div>
                    <a>
                      <svg
                        width="30"
                        height="30"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        color="#FA4539"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                      </svg>
                    </a>
                  </div>
                </section>
              );
            } else {
              return <h1>Cart is empty</h1>;
            }
          })}
        </section>
        <section className="cart-checkout">
          <CartTotal cart={cart} />
          {cart.length > 0 && (
            <div className="cart-buttons">
              <button
                onClick={() => {
                  setCart([]);
                }}
              >
                Clear Cart
              </button>
              <button>Checkout</button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

export default Cart;

import Navigation from "./Navigation";
import products from "../data/product-data";

function Products(props) {
  // const { cart, setCart } = props;
  const cart = props.cart;
  return (
    <>
      <Navigation />
      <section className="product-list">
        {products.map((item, index) => (
          <div className="product-item" key={index}>
            <div className="product-details">
              <img src={item.image} alt="item" />
              <h3>{item.name}</h3>
              <p>$ {item.price}</p>
            </div>
            <button
              onClick={() => {
                cart.push(item);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </section>
    </>
  );
}

export default Products;

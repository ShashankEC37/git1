import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove item from store
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProdct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <img
                  className="starimage"
                  src="http://www.pngall.com/wp-content/uploads/2017/05/Star-PNG-File.png"
                  alt=""
                />
              </p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

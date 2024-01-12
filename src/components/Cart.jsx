import { useContext } from "react";
import { ShopContex } from "../contex";

const Cart = (props) => {
  const { order, handleBasket } = useContext(ShopContex);

  const quantity = order.length;
  return (
    <div className="cart" onClick={handleBasket}>
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quntity">{quantity}</span> : null}
    </div>
  );
};

export { Cart };

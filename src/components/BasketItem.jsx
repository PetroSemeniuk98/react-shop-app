import { useContext } from "react";
import { ShopContex } from "../contex";

const BasketItem = (props) => {
  const { id, name, quantity, price } = props;
  const { incQuantity, decQuantity, removeFromBasket } = useContext(ShopContex);

  return (
    <li className="collection-item">
      {name}x
      <i
        className="material-icons basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>
      x{quantity}
      <i
        className="material-icons basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>
      = {price * quantity}$
      <span
        className="secondary-content"
        style={{ color: "black", cursor: "pointer" }}
        onClick={() => removeFromBasket(id)}
      >
        <i className="material-icons">close</i>
      </span>
    </li>
  );
};

export { BasketItem };

import { useContext } from "react";
import { ShopContex } from "../contex";

const BasketItem = (props) => {
  const {
    id,
    name,
    quantity,
    price,
    removeFromBasket = Function.prototype,
    addQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const { example } = useContext(ShopContex);
  console.log(example);

  return (
    <li className="collection-item">
      {name}x
      <i
        className="material-icons basket-quantity"
        onClick={() => addQuantity(id)}
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

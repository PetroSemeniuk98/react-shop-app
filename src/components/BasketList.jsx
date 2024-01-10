import { BasketItem } from "./BasketItem";

const BasketList = (props) => {
  const {
    order = [],
    handleBasket = Function.prototype,
    removeFromBasket = Function.prototype,
    addQuantity,
    decQuantity,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket">
      <li
        className="collection-item blue darken-3 "
        style={{
          textTransform: "uppercase",
          fontSize: "17px",
          fontWeight: "800",
          color: "white",
        }}
      >
        Basket
      </li>

      <span className="secondary-content close-basket" onClick={handleBasket}>
        <i className="material-icons">close</i>
      </span>

      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.id}
            {...item}
            removeFromBasket={removeFromBasket}
            addQuantity={addQuantity}
            decQuantity={decQuantity}
          />
        ))
      ) : (
        <li className="collection-item">Empty Basket</li>
      )}

      <li
        className="collection-item blue darken-3 "
        style={{
          textTransform: "uppercase",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "white",
          fontWeight: "600",
        }}
      >
        <button className="btn btn-order">Order</button>
        <span
          style={{ fontSize: "20px", marginLeft: "5px", fontWeight: "800" }}
          className="right"
        >
          Total Price:
          {totalPrice}$
        </span>
      </li>
    </ul>
  );
};

export { BasketList };

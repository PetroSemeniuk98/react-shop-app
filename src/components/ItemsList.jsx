import { ItemCard } from "./ItemCard";

const ItemsList = (props) => {
  const { items = [], addToBasket = Function.prototype } = props;
  return (
    <div className="items">
      {items.map((item) => (
        <ItemCard key={item.id} {...item} addToBasket={addToBasket} />
      ))}
    </div>
  );
};

export { ItemsList };
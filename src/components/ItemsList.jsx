import { useContext } from "react";
import { ItemCard } from "./ItemCard";
import { ShopContex } from "../contex";



const ItemsList = () => {
  const { goods = [] } = useContext(ShopContex)
  return (
    <div className="items">
      {goods.map((item) => (
        <ItemCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export { ItemsList };

import { useEffect, useState } from "react";

import { API_KEY, baseURL } from "../config";
import { Preloader } from "./Preloader";
import { ItemsList } from "./ItemsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoadind] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alert, setAlert] = useState("");

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };

      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
    setAlert(item.name);
  };
  const handleBasket = () => {
    setBasketShow(!isBasketShow);
  };
  const addQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity + 1;

        return {
          ...item,
          quantity: newQuantity,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };
  const decQuantity = (itemId) => {
    const newOrder = order.map((item) => {
      if (item.id === itemId) {
        const newQuantity = item.quantity - 1;

        return {
          ...item,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        };
      } else {
        return item;
      }
    });
    setOrder(newOrder);
  };
  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((item) => item.id !== itemId);
    setOrder(newOrder);
  };
  useEffect(function getGoods() {
    fetch(baseURL, { headers: { Authorization: API_KEY } })
      .then((respons) => respons.json())
      .then((data) => setGoods(data.featured), setLoadind(false));
  }, []);
  const closeAlert = () => {
    setAlert("");
  };

  return (
    <main className="content container">
      <Cart quantity={order.length} handleBasket={handleBasket} />
      {loading ? (
        <Preloader />
      ) : (
        <ItemsList items={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasket={handleBasket}
          removeFromBasket={removeFromBasket}
          addQuantity={addQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alert && <Alert name={alert} alert={closeAlert} />}
    </main>
  );
};

export { Shop };

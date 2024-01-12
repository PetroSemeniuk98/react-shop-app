import { useEffect, useContext } from "react";

import { API_KEY, baseURL } from "../config";
import { Preloader } from "./Preloader";
import { ItemsList } from "./ItemsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

import { ShopContex } from "../contex";

const Shop = () => {
  const { loading, isBasketShow, alertName, setGoods } = useContext(ShopContex);

  useEffect(function getGoods() {
    fetch(baseURL, { headers: { Authorization: API_KEY } })
      .then((respons) => respons.json())
      .then((data) => data.featured && setGoods(data.featured));
    // eslint-disable-next-line
  }, []);

  return (
    <main className="content container">
      <Cart />
      {loading ? <Preloader /> : <ItemsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
};

export { Shop };

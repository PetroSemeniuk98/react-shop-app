import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const ShopContex = createContext();

const initialState = {
  goods: [],
  meals: [],
  loading: true,
  order: [],
  isBasketShow: false,
  alertName: "",
};

export const ContexProvider = ({ children }) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.closeAlert = () => {
    dispatch({ type: "CLOSE_ALERT" });
  };

  value.removeFromBasket = (itemId) => {
    dispatch({ type: "REMOWE_FROM_BASKET", payload: { id: itemId } });
  };

  value.addToBasket = (item) => {
    dispatch({ type: "ADDED_TO_BASKET", payload: item });
  };

  value.incQuantity = (itemId) => {
    dispatch({ type: "INC_QUANTITY", payload: { id: itemId } });
  };
  value.decQuantity = (itemId) => {
    dispatch({ type: "DEC_QUANTITY", payload: { id: itemId } });
  };
  value.handleBasket = () => {
    dispatch({ type: "HANDLE_BASKET" });
  };

  value.setGoods = (data) => {
    dispatch({ type: "SET_GOODS", payload: data });
  };

  value.setMeals = (data) => {
    dispatch({ type: "SET_MEALS", payload: data });
  };

  return <ShopContex.Provider value={value}>{children}</ShopContex.Provider>;
};

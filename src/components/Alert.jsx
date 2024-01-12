import { useContext, useEffect } from "react";
import { ShopContex } from "../contex";

const Alert = (props) => {
  // const { name = "", alert = Function.prototype } = props;

  const { alertName, closeAlert } = useContext(ShopContex);

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000);

    return () => {
      setInterval(timerId);
    };
    // eslint-disable-next-line
  }, [alertName]);

  return (
    <div id="toast-container">
      <div className="toast"> {alertName} added to cart!</div>
    </div>
  );
};

export { Alert };

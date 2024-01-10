import { useEffect } from "react";

const Alert = (props) => {
  const { name = "", alert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(alert, 3000);

    return () => {
      setInterval(timerId);
    };
    // eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast"> {name} added to cart!</div>
    </div>
  );
};

export { Alert };
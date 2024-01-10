const Cart = (props) => {
    const { quantity = 0, handleBasket = Function.prototype } = props;
    return (
      <div className="cart" onClick={handleBasket}>
        <i className="material-icons">shopping_cart</i>
        {quantity ? <span className="cart-quntity">{quantity}</span> : null}
      </div>
    );
  };
  
  export { Cart };
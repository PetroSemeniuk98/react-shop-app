import { useContext } from "react";
import { ShopContex } from "../contex";



const ItemCard = (props) => {
    const {
      full_background: image,
      id,
      description: desc,
      name,
      price,
    } = props;
    const {addToBasket}=useContext(ShopContex)
    return (
      <div className="card">
        <div className="card-image">
          <img src={image} alt="item" />
        </div>
        <div className="card-content ">
          <span className="card-title">{name}</span>
          <p>{desc}</p>
        </div>
        <div className="card-action">
          <button
            className="btn blue darken-3"
            onClick={() => addToBasket({ id, name, price }) }
          >
            Buy
          </button>
          <span className="right" style={{ fontSize: "25px" }}>
            {price}$
          </span>
        </div>
      </div>
    );
  };
  
  export { ItemCard };
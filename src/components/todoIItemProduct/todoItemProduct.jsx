import React from "react";

import "./styles.scss";
import { observer } from "mobx-react";
import todoStores from "../../todoStore/todoStore";

const TodoItemProduct = (props) => {
    const {item,handleAddCart} = props
  return (
    <div className="itemProduct">
      <div className="itemProduct__thumb">
        <img src={item.image} alt="" />
      </div>
      <h2 className="itemProduct__title">{item.name}</h2>
      <p className="itemProduct__price">${item.price}</p>
      <button onClick={()=>handleAddCart(item)} className="itemProduct__btn">Add to cart</button>
    </div>
  );
};

TodoItemProduct.propTypes = {};

export default observer( TodoItemProduct) ;

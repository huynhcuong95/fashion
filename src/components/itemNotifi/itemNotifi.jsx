import React from "react";
import PropTypes from "prop-types";
import img01 from "../../image/img01.png";
import "./styles.scss";
import { changeCount } from "../../layout/Body/bodyy";
import todoStores from "../../todoStore/todoStore";
const ItemNotifi = ({ dataItem, handleDelete }) => {
    console.log(dataItem);
  return (
    <div className="itemNotifi">
      <div className="itemNotifi__image">
        <img src={dataItem.image} />
      </div>
      <div className="itemNotifi__title">
        <p>Premium-Weight Crew{dataItem.name}</p>
      </div>
      <div className="itemNotifi__btnDes">
        <button
          onClick={() => dataItem.count !== 1 && changeCount(dataItem, dataItem.count - 1, dataItem.id)
         
          }
        >
          -
        </button>
      </div>
      <div className="itemNotifi__num">
        <p>{dataItem.count}</p>
      </div>
      <div className="itemNotifi__btnIns">
        <button
          onClick={() => changeCount(dataItem, dataItem.count + 1, dataItem.id)}
        >
          +
        </button>
      </div>
      <div className="itemNotifi__prices">
        <p>${dataItem.price}</p>
      </div>
      <div className="itemNotifi__delete">
        <button onClick={() => handleDelete(dataItem)}>x</button>
      </div>
    </div>
  );
};

ItemNotifi.propTypes = {};

export default ItemNotifi;

import React, { memo } from "react";
import PropTypes from "prop-types";
import ItemNotifi from "../../../components/itemNotifi/itemNotifi";
import "./styles.scss";
import { observer } from "mobx-react";
import todoStores from "../../../todoStore/todoStore";

const ListItemNotifi = ((props) => {
  return (
    <div style={{ display :  todoStores.isDisplay ?"block":"none"}}>
      <div className="listItemNotifi">
        <div className="listItemNotifi__title">
          <h2>Your Shopping Cart</h2>
          <span className="listItemNotifi__number">6</span>
        </div>
        <div className="listItemNotifi__list">
          <ItemNotifi />
          <ItemNotifi />
          <ItemNotifi />
          <ItemNotifi />
        </div>
      </div>
    </div>
  );
});

ListItemNotifi.propTypes = {};

export default ListItemNotifi;

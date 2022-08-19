import React from "react";
import PropTypes from "prop-types";
import pic from "../../image/icon_cart.png";
import logo from "../../image/logo.png";
import "./styles.scss";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import todoStores from "../../todoStore/todoStore";


const Header = (props) => {
console.log(todoStores.count.NumberUser);
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <Link to="/fashion/" className="header__logo--image">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__box">
          <a onClick={()=>
            todoStores.checkDisplay()} className="header__box--card">
            <img src={pic} alt="ádasd" />{" "}
            <span className="menu-items__number">{todoStores.count.NumberUser}</span>
          </a>
         
          <div className="menu">
            <input type="checkbox" name="" id="" className="check" />
            <ul className="menu-items">
              <li>
                <Link to="/fashion/add">Add Cart</Link>
              </li>
              <li>
                <a href="https://google.com" target="_blank">
                  View Cart
                </a>
              </li>
            </ul>
            <div className="ham-menu">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {};

export default observer(Header);

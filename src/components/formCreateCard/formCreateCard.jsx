import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants";
import { observer } from "mobx-react";
import todoStores from "../../todoStore/todoStore";

const FormCreateCard = (props) => {
  let navigate = useNavigate();
  const [dataArr, setDataArr] = useState([]);
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    image: "",
  });
  // console.log(todoStores.data);
  const handleChangeFile = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  function checkValue(val) {
    let a = 0;
    todoStores.data.forEach((e, i) => {
      if (e.name == val) {
        a++;
      }
    });
    if (a > 0) return true;
    else return false;
  }
  const handleChangeForm = (e) => {
    e.preventDefault();
    if (
      formValue.name == "" ||
      formValue.price == "" ||
      formValue.image == ""
    ) {
      alert("Khong duoc de trong");
    } else if (checkValue(formValue.name)) {
      alert("Trung");
    } else {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));
      navigate("/fashion/");
      todoStores.setRender();
    }
  };
  const handleReset = (e) => {
    setFormValue({
      name: "",
      price: "",
      image: "",
    });
  };
  return (
    <div className="form">
      <form className="formProduct" onSubmit={handleChangeForm}>
        <h2 className="formProduct__title">Add New Products</h2>
        <div className="formProduct__input">
          <label htmlFor="name" className="formProduct__input--txt">
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValue.name}
            onChange={handleChangeFile}
            className="formProduct__input--value"
          />
        </div>
        <div className="formProduct__input">
          <label htmlFor="price" className="formProduct__input--txt">
            Price:{" "}
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formValue.price}
            onChange={(e) => handleChangeFile(e)}
            className="formProduct__input--value"
          />
        </div>
        <div className="formProduct__input">
          <label htmlFor="image" className="formProduct__input--txt">
            Image:{" "}
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formValue.image}
            onChange={(e) => handleChangeFile(e)}
            className="formProduct__input--value"
          />
        </div>
        <div className="formProduct__input">
          <button
            type="submit"
            className="formProduct__input--btn formProduct__input--btnS"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            type="reset"
            className="formProduct__input--btn formProduct__input--btnR"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

FormCreateCard.propTypes = {};

export default observer(FormCreateCard);

import React from "react";

const Confirm = ({ text, handler, close, data }) => (
  <div className="confirm">
    <div className="confirm__container">
      <p className="text">{text}</p>
      <div className="menu">
        <span onClick={() => handler(data)} className="clickable menu__true">
          Да
        </span>
        <span
          onClick={() => close({ open: false })}
          className="clickable menu__false"
        >
          Нет
        </span>
      </div>
    </div>
  </div>
);

export default Confirm;

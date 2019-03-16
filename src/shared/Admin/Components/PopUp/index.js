import React from "react";

const PopUp = ({ ...props }) => (
  <div className="popup">
    <div className="popup__container">
      <props.Component {...props} />
      <span onClick={props.close} className="close-popup clickable">
        ×
      </span>
    </div>
  </div>
);

export default PopUp;

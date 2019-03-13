import React from "react";

const SaveButton = ({ name, submit }) => (
  <div onClick={submit} className="save-button clickable">
    {name}
  </div>
);

export default SaveButton;

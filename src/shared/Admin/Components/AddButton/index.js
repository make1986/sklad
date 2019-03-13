import React from "react";
import { Link } from "react-router-dom";

const AddButton = ({ src }) => (
  <Link to={src} className="add-button">
    +
  </Link>
);

export default AddButton;

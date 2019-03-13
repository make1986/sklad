import React from "react";

import HOC from "./HOC";

const User = ({ name, logout }) => (
  <div className="header__user">
    <p className="name">{name}</p>
    <p onClick={logout} className="logout clickable">
      Выход
    </p>
  </div>
);

export default HOC(User);

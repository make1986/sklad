import React from "react";
import { Link } from "react-router-dom";

import { API_PREFIX } from "../../../../../etc/config";

import ImageBlock from "../../ImageBlock";

const Logo = () => (
  <Link className="header__logo" to="/admin">
    <ImageBlock src={`${API_PREFIX}/Static/Images/logo.png`} classes="img" />
  </Link>
);

export default Logo;

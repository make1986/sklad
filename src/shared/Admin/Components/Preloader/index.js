import React from "react";

import { API_PREFIX } from "../../../../etc/config";

const Preloader = () => (
  <div className="preloader">
    <img src={`${API_PREFIX}/Static/SVG/Ellipsis-1s-200px.svg`} />
  </div>
);

export default Preloader;

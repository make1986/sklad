import React from "react";
import { Link } from "react-router-dom";

import ItemHoc from "./itemHOC";

const ItemMenu = ({ src, name, isDropDown }) => (
  <div className="item">
    {isDropDown === "yes" ? (
      <React.Fragment>
        <span className="item__drop">{name}</span>
        <div className="item__down">
          {src.map((item, idx) => (
            <Link key={idx} className="link" to={item.src}>
              {item.name}
            </Link>
          ))}
        </div>
      </React.Fragment>
    ) : (
      <Link className="item__link" to={src}>
        {name}
      </Link>
    )}
  </div>
);

export default ItemHoc(ItemMenu);

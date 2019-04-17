import React from "react";

const Menu = ({ menu, itemClick, onSave }) => (
  <div className="content-menu">
    {menu.map((item, idx) => (
      <span
        onClick={() => itemClick(item.type)}
        className="content-menu__item clickable"
        key={idx}
      >
        {item.name}
      </span>
    ))}
    <span onClick={onSave} className="content-menu__item save clickable">
      Сохранить
    </span>
  </div>
);

export default Menu;

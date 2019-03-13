import React from "react";

import Item from "./Item";

const Menu = () => (
  <div className="header__menu">
    <Item
      src={[
        { name: "Категории", src: "/admin/categories" },
        { name: "Товары", src: "/admin/catalog" },
        { name: "Бренды", src: "/admin/brands" },
        { name: "Склад", src: "/admin/stock" }
      ]}
      name="Товары"
      isDropDown="yes"
    />
    <Item src="/admin/orders" name="Заказы" isDropDown="no" />
    <Item src="/admin/statistics" name="Статистика" isDropDown="no" />
    <Item src="/admin/ads" name="Реклама" isDropDown="no" />
    <Item
      src={[
        { name: "Настрока оплаты", src: "/admin/payment" },
        { name: "Настройка доставки", src: "/admin/delivery" }
      ]}
      name="Оплата и доставка"
      isDropDown="yes"
    />
    <Item
      src={[
        { name: "Администраторы", src: "/admin/admins" },
        { name: "Клиенты", src: "/admin/clients" }
      ]}
      name="Пользователи"
      isDropDown="yes"
    />
    <Item src="/admin/contacts" name="Контакты" isDropDown="no" />
  </div>
);

export default Menu;

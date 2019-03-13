import React from "react";
import { Link } from "react-router-dom";

import withMany from "../../HOC/LoadPages/WithMany";

import AddButton from "../../Components/AddButton";

const catalogPage = ({ data, confirmToggle, deleteField }) => (
  <div className="page__container catalog-page">
    <h2 className="title-page">Все товары</h2>
    <div className="categories-page__container">All</div>
    <AddButton src="/admin/add-product" />
  </div>
);

export default withMany(
  catalogPage,
  "products/get_by_params",
  "Каталог товаров"
);

import React from "react";
import withContent from "../HOCs";

import Menu from "../Components/menu";
import Content from "../Components/content";

const menu = [
  { name: "+ Свободный блок", type: "free_block" },
  { name: "+ Блок с товарами", type: "product_block" }
];

const categoriesPage = ({ data, addBlock }) => (
  <div className="page__container content-page">
    <Menu menu={menu} itemClick={addBlock} onSave={() => console.log("save")} />
    <Content data={data} />
  </div>
);

export default withContent(
  categoriesPage,
  {
    get: "content/get_homepage"
  },
  "Контент"
);

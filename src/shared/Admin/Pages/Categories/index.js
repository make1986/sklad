import React from "react";
import withMany from "../../HOC/LoadPages/WithMany";

const categoriesPage = () => (
  <div className="page__container categories-page">
    <span>Categories</span>
  </div>
);

export default withMany(categoriesPage);

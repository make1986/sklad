import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import AddCategory from "./Pages/AddCategory";
import Catalog from "./Pages/Catalog";
import AddProduct from "./Pages/AddProduct";

import { MultiBootloader } from "./api/load";

function getParams(path, noparams) {
  let params = path.split(noparams)[1];
  if (!params || params.lenght === 0) {
    return "";
  } else {
    return params;
  }
}

const routes = [
  {
    path: "/admin",
    exact: true,
    component: Home
  },
  {
    path: "/admin/categories",
    exact: false,
    component: Categories,
    handlerClass: MultiBootloader,
    params: {
      url: "categories/get_by_params",
      params: path => getParams(path, "/admin/categories/")
    },
    title: "Категории"
  },
  {
    path: "/admin/add-category",
    exact: false,
    component: AddCategory,
    title: "Категория товаров"
  },
  {
    path: "/admin/edit-category/:id",
    exact: false,
    component: AddCategory,
    handlerClass: MultiBootloader,
    params: {
      url: "categories/get_by_id",
      params: path => getParams(path, "/admin/edit-category/")
    },
    title: "Категория товаров"
  },
  {
    path: "/admin/catalog",
    exact: false,
    component: Catalog,
    handlerClass: MultiBootloader,
    params: {
      url: "products/get_by_params",
      params: path => getParams(path, "/admin/catalog/")
    },
    title: "Каталог товаров"
  },
  {
    path: "/admin/add-product",
    exact: false,
    component: AddProduct,
    title: "Товар"
  }
];

export default routes;

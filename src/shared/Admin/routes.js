import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import AddCategory from "./Pages/AddCategory";
import Catalog from "./Pages/Catalog";
import AddProduct from "./Pages/AddProduct";
import Brands from "./Pages/Brands";
import AddBrand from "./Pages/AddBrand";
import Skills from "./Pages/Skills";
import AddSkills from "./Pages/AddSkills";
import Stock from "./Pages/Stock";
import Admins from "./Pages/Admins";
import AddAdmin from "./Pages/AddAdmin";
import Adsense from "./Pages/Adsense";
import AddAdsense from "./Pages/AddAdsense";
import Homepage from "./Pages/Content/Homepage";

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
  },
  {
    path: "/admin/edit-product/:id",
    exact: false,
    component: AddProduct,
    handlerClass: MultiBootloader,
    params: {
      url: "products/get_by_id",
      params: path => getParams(path, "/admin/edit-product/")
    },
    title: "Товар"
  },
  {
    path: "/admin/stock",
    exact: false,
    component: Stock,
    handlerClass: MultiBootloader,
    params: {
      url: "products/get_by_params",
      params: path => getParams(path, "/admin/stock/")
    },
    title: "Каталог товаров"
  },
  {
    path: "/admin/brands",
    exact: false,
    component: Brands,
    handlerClass: MultiBootloader,
    params: {
      url: "brands/get_by_params",
      params: path => getParams(path, "/admin/brands/")
    },
    title: "Бренды"
  },
  {
    path: "/admin/add-brand",
    exact: false,
    component: AddBrand,
    title: "Бренд"
  },
  {
    path: "/admin/edit-brand/:id",
    exact: false,
    component: AddBrand,
    handlerClass: MultiBootloader,
    params: {
      url: "brands/get_by_id",
      params: path => getParams(path, "/admin/edit-brand/")
    },
    title: "Бренд"
  },
  {
    path: "/admin/skills",
    exact: false,
    component: Skills,
    handlerClass: MultiBootloader,
    params: {
      url: "skills/get_by_params",
      params: path => getParams(path, "/admin/skills/")
    },
    title: "Навыки"
  },
  {
    path: "/admin/add-skills",
    exact: false,
    component: AddSkills,
    title: "Навык"
  },
  {
    path: "/admin/edit-skills/:id",
    exact: false,
    component: AddSkills,
    handlerClass: MultiBootloader,
    params: {
      url: "skills/get_by_id",
      params: path => getParams(path, "/admin/edit-skills/")
    },
    title: "Навык"
  },
  {
    path: "/admin/admins",
    exact: false,
    component: Admins,
    handlerClass: MultiBootloader,
    params: {
      url: "admins/get_by_params",
      params: path => getParams(path, "/admin/admins/")
    },
    title: "Администраторы"
  },
  {
    path: "/admin/add-admin",
    exact: false,
    component: AddAdmin,
    title: "Администратор"
  },
  {
    path: "/admin/edit-admin/:id",
    exact: false,
    component: AddAdmin,
    handlerClass: MultiBootloader,
    params: {
      url: "admins/get_by_id",
      params: path => getParams(path, "/admin/edit-admin/")
    },
    title: "Администратор"
  },
  {
    path: "/admin/adsense",
    exact: false,
    component: Adsense,
    handlerClass: MultiBootloader,
    params: {
      url: "adsense/get_by_params",
      params: path => getParams(path, "/admin/adsense/")
    },
    title: "Реклама"
  },
  {
    path: "/admin/add-adsense",
    exact: false,
    component: AddAdsense,
    title: "Рекламный модуль"
  },
  {
    path: "/admin/edit-adsense/:id",
    exact: false,
    component: AddAdsense,
    handlerClass: MultiBootloader,
    params: {
      url: "adsense/get_by_id",
      params: path => getParams(path, "/admin/edit-adsense/")
    },
    title: "Рекламный модуль"
  },
  {
    path: "/admin/homepage",
    exact: false,
    component: Homepage,
    handlerClass: MultiBootloader,
    params: {
      url: "content/get_homepage",
      params: path => getParams(path, "/admin/homepage/")
    },
    title: "Контент"
  }
];

export default routes;

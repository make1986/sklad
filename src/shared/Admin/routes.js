import Home from "./Pages/Home";
import CDEK from "./Pages/CDEK";
import Categories from "./Pages/Categories";

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
    path: "/admin/cdek",
    exact: false,
    component: CDEK
  },
  {
    path: "/admin/categories/:page/:limit/:sort",
    exact: false,
    component: Categories,
    handlerClass: MultiBootloader,
    params: {
      url: "categories/get_by_params",
      params: path => getParams(path, "/admin/categories/")
    },
    title: "Категории"
  }
];

export default routes;

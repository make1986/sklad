import React from "react";
import { hydrate } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "../shared/Admin/App";
import "./index.scss";

hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("admin")
);

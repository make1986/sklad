import express from "express";
import { renderToString } from "react-dom/server";
import React from "react";
import serialize from "serialize-javascript";
import { matchPath, StaticRouter } from "react-router-dom";

import config from "../etc/config";
import UserApp from "../shared/User/App";
import AdminApp from "../shared/Admin/App";
import userRoutes from "../shared/User/routes";
import adminRoutes from "../shared/Admin/routes";

const router = express.Router();

router.get("/admin/*", (req, res, next) => {
  const activeRoute =
    adminRoutes.find(route => matchPath(req.url, route)) || {};

  const handlerObject = activeRoute.handlerClass
    ? new activeRoute.handlerClass(
        activeRoute.params.url,
        activeRoute.params.params(req.path)
      )
    : null;

  const promise =
    handlerObject !== null ? handlerObject.response() : Promise.resolve();

  const title = activeRoute.title ? activeRoute.title : "Панель администратора";

  promise
    .then(data => {
      const context = { data };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <AdminApp />
        </StaticRouter>
      );

      res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>${title}</title>
          <link rel="shortcut icon" href="/Static/favicon.ico" type="image/x-icon">
          <script src="/adminbundle.js" defer></script>
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </head>
        <body>
          <div id="admin">${markup}</div>
        </body>
        </html>
        `);
    })
    .catch(next);
});

router.get("*", (req, res, next) => {
  const activeRoute = userRoutes.find(route => matchPath(req.url, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  const title = activeRoute.title
    ? activeRoute.title
    : "Склад ума - магазин развивающих и настольных игр, книг и пособий.";

  promise
    .then(data => {
      const context = { data };
      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <UserApp />
        </StaticRouter>
      );

      res.send(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
        <link rel="shortcut icon" href="/Static/favicon.ico" type="image/x-icon">
        <script src="/bundle.js" defer></script>
        <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
      </html>
      `);
    })
    .catch(next);
});

module.exports = router;

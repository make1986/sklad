import express from "express";
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
import ss from "socket.io-stream";
import cors from "cors";
import path from "path";
import fs from "fs";

import compression from "compression";
import bodyParser from "body-parser";
import helmet from "helmet";
import session from "express-session";

import config from "../etc/config";
import db from "./db/connect";
import sessionStore from "./sessionStore";

import routes from "./router";
import { file, categories, products } from "./api";
import { loadImage, deleteFile } from "./socket/files";

db.setUpConnect();
app.use(helmet());
app.use(
  cors({ origin: config.API_PREFIX, methods: "GET,HEAD,PUT,PATCH,POST,DELETE" })
);
app.use(compression());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use(
  session({
    secret: config.SECRET_SESSION,
    resave: false,
    key: "sid",
    saveUninitialized: false,
    store: sessionStore
  })
);

app.use("/api/upload", file);
app.use("/api/categories", categories);
app.use("/api/products", products);

app.use(express.static("public"));
app.use(routes);

io.on("connection", socket => {
  ss(socket).on("upload_img", (stream, data) => {
    loadImage(stream, data, socket);
  });
  socket.on("delete_file", filename => {
    deleteFile(filename);
  });
});

http.listen(config.PORT, () => {
  console.log(`Server is listening on port: ${config.PORT}`);
});

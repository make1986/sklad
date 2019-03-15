import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import { deleteFile } from "../socket/files";

import "../db/Models/Category";
const Category = mongoose.model("Category");

import "../db/Models/Product";
const Product = mongoose.model("Product");

import DataBase from "../db/Queries";

router.get("/get_by_params(/:params/:search)?", (req, res) => {
  const products = new DataBase(Product);
  let { params } = req;
  params.limit = 5;
  products
    .getByParams(params)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  const products = new DataBase(Product);
  products
    .add(req.body)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  const products = new DataBase(Product);
  const { id } = req.params;
  products
    .delete(id)
    .then(data => {
      if (data.data && data.data.image) {
        deleteFile(data.data.image);
      }
      if (data.data && data.data.gallery && data.data.gallery.length > 0) {
        data.data.gallery.map(img => {
          deleteFile(img);
        });
      }
      return res.json(data);
    })
    .catch(err => {
      return res
        .status(400)
        .json({ ok: false, message: "Ошибка сервера, попробуйте позже!" });
    });
});

module.exports = router;

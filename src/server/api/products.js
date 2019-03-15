import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import { deleteFile } from "../socket/files";

import "../db/Models/Category";
const Category = mongoose.model("Category");

import "../db/Models/Product";
const Product = mongoose.model("Product");

import DataBase from "../db/Queries";

router.get("/get_by_params(/:params/:search/:page)?", (req, res) => {
  const products = new DataBase(Product);
  let { params } = req;
  params.limit = 5;
  products
    .getByParams(params)
    .then(data => {
      return products.getCount(params, data);
    })
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

router.get("/get_by_id/:id", (req, res) => {
  const products = new DataBase(Product);
  products
    .getById(req.params.id)
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

router.post("/edit", (req, res) => {
  const products = new DataBase(Product);
  const id = req.body._id;
  let data = req.body;
  delete data._id;
  delete data.created_at;
  delete data.updatedAt;
  if (data.__v) {
    delete data.__v;
  }
  products
    .edit(id, data)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

module.exports = router;

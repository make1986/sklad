import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import { deleteFile } from "../socket/files";

import "../db/Models/Category";
const Category = mongoose.model("Category");

import "../db/Models/Product";
const Product = mongoose.model("Product");

import DataBase from "../db/Queries";

router.get("/get_by_params", (req, res) => {
  const products = new DataBase(Product);
  products
    .getByParams({ limit: 10 })
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

module.exports = router;

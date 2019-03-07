import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import "../db/Models/Category";
const Category = mongoose.model("Category");

import DataBase from "../db/Queries";

router.get("/get_by_params/:page/:limit/:sort/:params/:search", (req, res) => {
  const categories = new DataBase(Category);
  categories
    .getByParams(req.params)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

module.exports = router;

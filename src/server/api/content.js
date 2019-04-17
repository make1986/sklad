import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import { deleteFile } from "../socket/files";

import "../db/Models/Content";
const Content = mongoose.model("Content");

import DataBase from "../db/Queries";

router.get("/get_homepage", (req, res) => {
  const categories = new DataBase(Content);
  categories
    .getOne("component=home")
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

module.exports = router;

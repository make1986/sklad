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
  const categories = new DataBase(Category);
  categories
    .getByParams({ sort: "position=1" })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/get_by_id/:id", (req, res) => {
  const categories = new DataBase(Category);
  categories
    .getById(req.params.id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  const categories = new DataBase(Category);
  categories
    .getByParams({ limit: 1, sort: "position=-1" })
    .then(data => {
      if (data && data.ok && data.data.length > 0) {
        let { body } = req;
        body.position = data.data[0].position + 1;
        return categories.add(body);
      } else {
        return categories.add(req.body);
      }
    })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/position", (req, res) => {
  const categories = new DataBase(Category);
  categories
    .arrEditer(req.body, 0)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/edit", (req, res) => {
  const categories = new DataBase(Category);
  const data = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image || ""
  };
  const id = req.body._id;
  categories
    .edit(id, data)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  const categories = new DataBase(Category);
  const products = new DataBase(Product);
  const { id } = req.params;
  products
    .getByParams({ params: `category=${id}` })
    .then(data => {
      if (data.data && data.data.length > 0) {
        return {
          ok: false,
          message:
            "Не поднимается рука, чтобы удалить данную категорию. У вас имеются товары, относящиеся к ней. Измените категорию в этих товарах или удалите их."
        };
      }
      return { ok: true };
    })
    .then(data => {
      if (data.ok) {
        return categories.delete(id);
      } else {
        return data;
      }
    })
    .then(data => {
      if (data.data && data.data.image) {
        deleteFile(data.data.image);
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

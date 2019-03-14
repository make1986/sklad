import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import { deleteFile } from "../socket/files";

import "../db/Models/Brand";
const Brand = mongoose.model("Brand");

import "../db/Models/Product";
const Product = mongoose.model("Product");

import DataBase from "../db/Queries";

router.get("/get_by_params", (req, res) => {
  const brand = new DataBase(Brand);
  brand
    .getByParams(req.params)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  const brands = new DataBase(Brand);
  brands
    .add(req.body)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/get_by_id/:id", (req, res) => {
  const brands = new DataBase(Brand);
  brands
    .getById(req.params.id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/edit", (req, res) => {
  const brands = new DataBase(Brand);
  const data = {
    name: req.body.name,
    description: req.body.description || "",
    image: req.body.image
  };
  const id = req.body._id;
  brands
    .edit(id, data)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  const brands = new DataBase(Brand);
  const products = new DataBase(Product);
  const { id } = req.params;
  products
    .getByParams({ params: `brand=${id}` })
    .then(data => {
      if (data.data && data.data.length > 0) {
        return {
          ok: false,
          message:
            "Не поднимается рука, чтобы удалить данный бренд. У вас имеются товары, относящиеся к нему. Измените бренд в этих товарах или удалите их."
        };
      }
      return { ok: true };
    })
    .then(data => {
      if (data.ok) {
        return brands.delete(id);
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

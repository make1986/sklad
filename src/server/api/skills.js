import express from "express";
const router = express.Router();
import mongoose from "mongoose";

import { deleteFile } from "../socket/files";

import "../db/Models/Skills";
const Skills = mongoose.model("Skills");

import "../db/Models/Product";
const Product = mongoose.model("Product");

import DataBase from "../db/Queries";

router.get("/get_by_params", (req, res) => {
  const skills = new DataBase(Skills);
  skills
    .getByParams({ sort: "position=1" })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/get_by_id/:id", (req, res) => {
  const skills = new DataBase(Skills);
  skills
    .getById(req.params.id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  const skills = new DataBase(Skills);
  skills
    .getByParams({ limit: 1, sort: "position=-1" })
    .then(data => {
      if (data && data.ok && data.data.length > 0) {
        let { body } = req;
        body.position = data.data[0].position + 1;
        return skills.add(body);
      } else {
        return skills.add(req.body);
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
  const skills = new DataBase(Skills);
  skills
    .arrEditer(req.body, 0)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/edit", (req, res) => {
  const skills = new DataBase(Skills);
  const data = {
    name: req.body.name,
    description: req.body.description,
    image: req.body.image || ""
  };
  const id = req.body._id;
  skills
    .edit(id, data)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  const skills = new DataBase(Skills);
  const products = new DataBase(Product);
  const { id } = req.params;
  products
    .getByParams({ params: `skills=${id}` })
    .then(data => {
      if (data.data && data.data.length > 0) {
        return {
          ok: false,
          message:
            "Не поднимается рука, чтобы удалить данный навык. У вас имеются товары, относящиеся к нему. Измените навык в этих товарах или удалите их."
        };
      }
      return { ok: true };
    })
    .then(data => {
      if (data.ok) {
        return skills.delete(id);
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

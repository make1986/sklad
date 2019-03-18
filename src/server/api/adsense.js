import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

import "../db/Models/Adsense";
const Adsense = mongoose.model("Adsense");

import DataBase from "../db/Queries";

import randomString from "../../helpers/randomString";
import sendMail from "../../helpers/mailer";

router.get("/get_by_params", (req, res) => {
  const adsense = new DataBase(Adsense);
  adsense
    .getByParams(req.params)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  const adsense = new DataBase(Adsense);
  adsense
    .add(req.body)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/get_by_id/:id", (req, res) => {
  const adsense = new DataBase(Adsense);
  adsense
    .getById(req.params.id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/edit", (req, res) => {
  const adsense = new DataBase(Adsense);
  const id = req.body._id;
  let data = req.body;
  delete data._id;
  delete data.created_at;
  delete data.updatedAt;
  if (data.__v) {
    delete data.__v;
  }
  adsense
    .edit(id, data)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  const adsense = new DataBase(Adsense);
  const { id } = req.params;
  adsense
    .delete(id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res
        .status(400)
        .json({ ok: false, message: "Ошибка сервера, попробуйте позже!" });
    });
});

module.exports = router;

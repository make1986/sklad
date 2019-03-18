import express from "express";
const router = express.Router();
import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";

import "../db/Models/Admin";
const Admin = mongoose.model("Admin");

import DataBase from "../db/Queries";

import randomString from "../../helpers/randomString";
import sendMail from "../../helpers/mailer";

router.get("/get_by_params", (req, res) => {
  const admin = new DataBase(Admin);
  admin
    .getByParams(req.params)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/add", (req, res) => {
  const admin = new DataBase(Admin);
  const nativePass = randomString(8);
  const pass = bcrypt.hashSync(nativePass);
  req.body.password = pass;
  admin
    .add(req.body)
    .then(data => {
      if (data.ok) {
        const message = `Здравствуйте ${
          req.body.name
        },\nвас добавили в качестве администратора на сайте sklad-uma.ru.\nВаш логин: ${
          req.body.email
        }\nВаш пароль: ${nativePass}`;
        return sendMail(
          "Склад ума <noreaply@paevskaya.com>",
          req.body.email,
          "Ваш пароль для вход в панель администратора",
          message
        );
      }
    })
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/get_by_id/:id", (req, res) => {
  const admin = new DataBase(Admin);
  admin
    .getById(req.params.id)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.post("/edit", (req, res) => {
  const admin = new DataBase(Admin);
  const id = req.body._id;
  let data = req.body;
  delete data._id;
  delete data.created_at;
  delete data.updatedAt;
  if (data.__v) {
    delete data.__v;
  }
  admin
    .edit(id, data)
    .then(data => {
      return res.json(data);
    })
    .catch(err => {
      return res.status(400).json(err);
    });
});

router.get("/delete/:id", (req, res) => {
  const admin = new DataBase(Admin);
  const { id } = req.params;
  admin
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

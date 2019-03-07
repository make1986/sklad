import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import mongoxlsx from "mongo-xlsx";

import { PushCity } from "../db/Queries/City";

const router = express.Router();

router.get("/test/:page", (req, res) => {
  return res.json({ page: req.params.page });
});

router.post("/city-xls", (req, res) => {
  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, `public/Uploads/Tmp`);
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({
    storage,
    limits: {},
    fileFilter: (req, file, callback) => {
      const ext = path.extname(file.originalname);
      if (ext !== ".xlsx" && ext !== ".xls") {
        const err = new Error("Extention");
        err.code = "EXTENTION";
        return callback(err);
      }
      callback(null, true);
    }
  }).single("file");

  upload(req, res, err => {
    let error = "";
    let filename = "";
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        error = "Слишком большой файл!";
      }
      if (err.code === "EXTENTION") {
        error = "Можно загружать файлы с расширениями XLSX, XLS!";
      }
      return res.status(400).json({
        ok: false,
        err,
        data: error
      });
    } else {
      if (req.file && req.file.filename) {
        filename = req.file.filename;
      }
      const model = null;
      const xlsx = `public/Uploads/Tmp/${filename}`;
      mongoxlsx.xlsx2MongoData(xlsx, model, function(err, data) {
        fs.unlinkSync(xlsx);
        if (err) {
          return res.json({
            ok: false,
            err,
            data: "Ошибка чтения файла"
          });
        }
        let newData = [];
        data.map((city, idx) => {
          if (city.ID) {
            newData.push(city);
          }
        });
        const AddCity = newData.map(city => {
          return new Promise((resolve, reject) => {
            PushCity(city).then(result => {
              console.log(result);
              resolve(city);
            });
          });
        });
        return Promise.all(AddCity).then(
          sub => {
            return res.json({ ok: true });
          },
          err => {
            console.log(err);
          }
        );
      });
    }
  });
});

module.exports = router;

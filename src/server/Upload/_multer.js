import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";


module.exports.uploadXls = multer({
  multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, `public/Uploads/Tmp`);
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + path.extname(file.originalname));
    }
  }),
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

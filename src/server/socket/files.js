import ss from "socket.io-stream";
import path from "path";
import fs from "fs";

module.exports.loadImage = (stream, data, socket) => {
  if (
    path.extname(data.name) === ".jpg" ||
    path.extname(data.name) === ".JPG" ||
    path.extname(data.name) === ".jpeg" ||
    path.extname(data.name) === ".JPEG" ||
    path.extname(data.name) === ".png" ||
    path.extname(data.name) === ".PNG"
  ) {
    const filename = Date.now() + path.extname(data.name);
    const filepath = path.join("public/Uploads/Images", filename);
    const ws = fs.createWriteStream(filepath);
    stream.pipe(ws);
    ws.on("finish", () => {
      if ((data.idx || data.idx === 0) && data.idx !== undefined) {
        socket.emit("load_successful", { filename, idx: data.idx });
      } else {
        socket.emit("load_successful", filename);
      }
    });
  }
};

module.exports.deleteFile = filename => {
  fs.stat(`public/Uploads/Images/${filename}`, (err, stats) => {
    if (err) {
      console.error(err);
    }
    fs.unlink(`public/Uploads/Images/${filename}`, err => {
      if (err) {
        console.error(err);
      } else {
        console.log("Deleted");
      }
    });
  });
};

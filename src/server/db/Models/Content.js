const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContentSchema = new Schema(
  {
    component: {
      type: String
    },
    body: {
      type: Map
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Content = mongoose.model("Content", ContentSchema);

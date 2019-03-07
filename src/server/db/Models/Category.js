const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String
    },
    image: {
      type: String
    },
    description: {
      type: String
    },
    test: {
      type: Array
    },
    obj: {
      type: Map
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Category = mongoose.model("Category", CategorySchema);

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
    position: {
      type: Number,
      default: 0
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Category = mongoose.model("Category", CategorySchema);

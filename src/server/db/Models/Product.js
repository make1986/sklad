const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
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
    article: {
      type: String
    },
    barcode: {
      type: String
    },
    category: {
      type: String
    },
    brand: {
      type: String
    },
    minAge: {
      type: Number
    },
    maxAge: {
      type: Number
    },
    weight: {
      type: Number
    },
    tags: {
      type: Array
    },
    features: {
      type: Array
    },
    gallery: {
      type: Array
    },
    youtube: {
      type: String
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Product = mongoose.model("Product", ProductSchema);

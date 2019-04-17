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
    skills: {
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
      type: Number,
      default: 0
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
    },
    price: {
      type: Number,
      default: 0
    },
    qt: {
      type: Number,
      default: 0
    },
    sold: {
      type: Number,
      default: 0
    },
    colors: {
      type: Array
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Product = mongoose.model("Product", ProductSchema);

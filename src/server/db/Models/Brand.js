const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BrandSchema = new Schema(
  {
    name: {
      type: String
    },
    image: {
      type: String
    },
    description: {
      type: String
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Brand = mongoose.model("Brand", BrandSchema);

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdsenseSchema = new Schema(
  {
    name: {
      type: String
    },
    image: {
      type: String
    },
    source: {
      type: String
    },
    clicked: {
      type: Number,
      default: 0
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Adsense = mongoose.model("Adsense", AdsenseSchema);

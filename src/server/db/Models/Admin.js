const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AdminSchema = new Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
    access: {
      type: Map,
      default: {}
    }
  },
  { timestamps: { createdAt: "created_at" } }
);

const Admin = mongoose.model("Admin", AdminSchema);

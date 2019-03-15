const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SkillsSchema = new Schema(
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

const Skills = mongoose.model("Skills", SkillsSchema);

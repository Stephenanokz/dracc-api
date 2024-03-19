const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    subtitle: { type: String },
    desc: { type: String },
    img: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", ServiceSchema);

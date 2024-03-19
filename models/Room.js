const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    price: { type: Number, required: true },
    img: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);

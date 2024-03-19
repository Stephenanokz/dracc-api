const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/auth");
const carouselImageRoutes = require("./routes/carouselImages");
const postRoutes = require("./routes/posts");
const roomRoutes = require("./routes/rooms");
const serviceRoutes = require("./routes/services");
const galleryImageRoutes = require("./routes/galleryImages");

dotenv.config();

const port = process.env.PORT || 8080;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("~DB Connection Successful~");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set("strictQuery", false);

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/carouselimages", carouselImageRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/galleryimages", galleryImageRoutes);

app.use("/", (req, res)=>{
  res.send("Api in service")
})

app.listen(port, () => {
  console.log(`****Backend Server Running on port ${port}****`);
});

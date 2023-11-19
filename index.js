const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();
const menuRoutes = require("./routes/menuRoutes");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT !== undefined ? process.env.PORT : 5000;

app.use("/api/menu", menuRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

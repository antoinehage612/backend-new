const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const menuRoutes = require("./routes/menuRoutes");

const app = express();
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use("/api/menu", menuRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

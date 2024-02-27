const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000 || process.env.PORT;

const rootRouter = require("./routes/index");

const app = express();

mongoose
  .connect("mongodb://localhost/paytm")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(cors());
app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`Server is started at ${PORT}`);
});

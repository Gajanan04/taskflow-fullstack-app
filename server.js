const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");

dotenv.config();

connectDB();

const app = express();
app.use(morgan("dev"));

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes"));

app.get("/", (req, res) => {
  res.send("API Running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
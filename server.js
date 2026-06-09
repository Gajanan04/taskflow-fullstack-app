const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const morgan = require("morgan");

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));

app.use("/api/v1/tasks", require("./routes/taskRoutes"));

// Test Route
app.get("/", (req, res) => {
  res.send("API Running...");
});

// Port
const PORT = process.env.PORT || 5000;

// Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
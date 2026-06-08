const express = require("express");
const adminOnly = require("../middleware/roleMiddleware");
const {
  createTask,
  getTasks,
  deleteTask,
  updateTask,
} = require("../controllers/taskController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createTask);

router.put("/:id", protect, updateTask);

router.get("/", protect, getTasks);

router.delete("/:id", protect, adminOnly, deleteTask);

module.exports = router;
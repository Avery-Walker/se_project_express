// routes/users.js
const express = require("express");
const {
  getCurrentUser,
  updateProfile,
  createUser,
  login,
  getUser,
} = require("../controllers/users");

const {
  validateUserBody,
  validateLogin,
  validateUserId,
} = require("../middleware/validation");

const router = express.Router();

router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateLogin, login);

router.get("/me", getCurrentUser);
router.patch("/me", validateUserBody, updateProfile);

router.get("/:userId", validateUserId, getUser);

module.exports = router;

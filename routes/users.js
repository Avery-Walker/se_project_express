const express = require("express");
const {
  getUsers,
  getCurrentUser,
  createUser,
  updateProfile,
} = require("../controllers/users");

const router = express.Router();

router.get("/", getUsers);
router.get("/me", getCurrentUser);
router.patch("/me", updateProfile);

module.exports = router;

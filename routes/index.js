const express = require("express");
const users = require("./users");
const clothing = require("./clothingItems");
const NotFoundError = require("../errors/NotFoundError");
const { createUser, login } = require("../controllers/users");
const {
  validateUserBody,
  validateLogin,
} = require("../middlewares/validation");

const router = express.Router();

router.use("/users", users);
router.use("/items", clothing);

router.use(() => {
  throw new NotFoundError("Requested resource not found");
});

router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateLogin, login);

module.exports = router;

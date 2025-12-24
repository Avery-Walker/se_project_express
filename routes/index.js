const express = require("express");
const usersRouter = require("./users");
const clothingRouter = require("./clothingItems");
const { createUser, login } = require("../controllers/users");
const { validateUserBody, validateLogin } = require("../middlewares/validation");
const NotFoundError = require("../errors/NotFoundError");

const router = express.Router();

router.post("/signup", validateUserBody, createUser);
router.post("/signin", validateLogin, login);

router.use("/users", usersRouter);
router.use("/items", clothingRouter);

router.use((req, res, next) => {
  next(new NotFoundError("Requested resource not found"));
});

module.exports = router;

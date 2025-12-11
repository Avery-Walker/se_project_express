const express = require("express");
const users = require("./users");
const clothing = require("./clothingItems");
const NotFoundError = require("../errors/NotFoundError");

const router = express.Router();

router.use("/users", users);
router.use("/items", clothing);

router.use(() => {
  throw new NotFoundError("Requested resource not found");
});

module.exports = router;

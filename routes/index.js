const express = require("express");
const userRouter = require("./users");
const clothingItemRouter = require("./clothingItems");

const router = express.Router();

router.use("/users", userRouter);
router.use("/items", clothingItemRouter);

router.use((req, res) => {
  res.status(404).send({ message: "Requested resource not found" });
});

module.exports = router;

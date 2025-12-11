// routes/clothingItems.js
const express = require("express");
const auth = require("../middlewares/auth");

const {
  getItems,
  createItem,
  deleteItem,
  likeItem,
  dislikeItem,
} = require("../controllers/clothingItems");

const {
  validateCardBody,
  validateItemId,
} = require("../middleware/validation");

const router = express.Router();

router.get("/", getItems);

router.post("/", auth, validateCardBody, createItem);

router.delete("/:itemId", auth, validateItemId, deleteItem);

router.put("/:itemId/likes", auth, validateItemId, likeItem);

router.delete("/:itemId/likes", auth, validateItemId, dislikeItem);

module.exports = router;

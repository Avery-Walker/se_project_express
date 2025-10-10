const router = require("express").Router();

router.get("/users", () => console.log("GET isers"));

module.exports = router;

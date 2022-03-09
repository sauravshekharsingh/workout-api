const express = require("express");
const router = express.Router();

router.use("/api", require("./api/index.routes"));

module.exports = router;

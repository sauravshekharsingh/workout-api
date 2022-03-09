const express = require("express");
const router = express.Router();

router.use("/trainer", require("./trainer.routes"));
router.use("/user", require("./user.routes"));
router.use("/exercise", require("./exercise.routes"));
router.use("/session", require("./session.routes"));

module.exports = router;

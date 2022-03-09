const express = require("express");
const router = express.Router();

const trainerController = require("./../../controllers/trainer.controller");

router.post("/create", trainerController.createTrainer);

module.exports = router;

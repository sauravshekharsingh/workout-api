const express = require("express");
const router = express.Router();

const exerciseController = require("./../../controllers/exercise.controller");

router.post("/create", exerciseController.createExerciseInfo);

module.exports = router;

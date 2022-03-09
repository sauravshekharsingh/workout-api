const express = require("express");
const router = express.Router();

const sessionController = require("./../../controllers/session.controller");

router.post("/create", sessionController.createSession);

router.post("/updateCompletion", sessionController.updateCompletion);

router.post("/updateSessionDates", sessionController.updateSessionDates);

router.post("/updateShiftDates", sessionController.updateShiftDates);

router.post(
  "/updateExercisePerfomed",
  sessionController.updateExercisePerfomed
);

module.exports = router;

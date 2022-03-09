const express = require("express");
const router = express.Router();

const userController = require("./../../controllers/user.controller");

router.post("/create", userController.createUser);

router.post("/mapUserToTrainer", userController.mapUserToTrainer);

module.exports = router;

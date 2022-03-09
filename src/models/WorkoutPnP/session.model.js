const mongoose = require("mongoose");
const workoutSchema = require("./workout.model");

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  routineRef: {
    type: mongoose.Types.ObjectId,
    ref: "Routine",
  },
  workout: {
    type: workoutSchema,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  userRef: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
  trainerRef: {
    type: mongoose.Types.ObjectId,
    ref: "Trainer",
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
});

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;

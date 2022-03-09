const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const exerciseSchema = require("./exercise.model.js");

const workoutSchema = new Schema({
  name: {
    type: String,
  },
  exercises: [exerciseSchema],
});

module.exports = workoutSchema;

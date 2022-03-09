const mongoose = require("mongoose");
const exerciseInfoSchema = require("../Admin/exerciseInfo.model.js");
const Schema = mongoose.Schema;
const exerciseSetSchema = require("./exerciseSet.model");

const exerciseSchema = new Schema({
  exerciseInfoRef: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "ExerciseInfo",
    required: true,
  },
  exerciseInfo: {
    type: exerciseInfoSchema,
  },
  name: {
    type: String,
  },
  exerciseSets: {
    type: [exerciseSetSchema],
    required: true,
  },
});

module.exports = exerciseSchema;

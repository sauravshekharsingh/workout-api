const mongoose = require("mongoose");
require("dotenv").config();

const exerciseInfoSchema = require("./../models/Admin/exerciseInfo.model");
const ExerciseInfo = mongoose.model("ExerciseInfo", exerciseInfoSchema);

const create = (obj) => {
  return new ExerciseInfo(obj).save();
};

const get = (params, fields = {}, options = {}) => {
  options.lean = true;

  return ExerciseInfo.findOne(params, fields, options);
};

const update = (params, obj, options = {}) => {
  options.lean = true;
  options.new = true;

  return ExerciseInfo.findOneAndUpdate(params, obj, options);
};

module.exports = { create, get, update };

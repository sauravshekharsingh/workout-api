require("dotenv").config();
const Trainer = require("./../models/Trainer/trainer.model");

const create = (obj) => {
  return new Trainer(obj).save();
};

const get = (params, fields = {}, options = {}) => {
  options.lean = true;

  return Trainer.findOne(params, fields, options);
};

const update = (params, obj, options = {}) => {
  options.lean = true;
  options.new = true;

  return Trainer.findOneAndUpdate(params, obj, options);
};

module.exports = { create, get, update };

require("dotenv").config();
const Session = require("./../models/WorkoutPnP/session.model");

const create = (obj) => {
  return new Session(obj).save();
};

const get = (params, fields = {}, options = {}) => {
  options.lean = true;

  return Session.findOne(params, fields, options);
};

const getMany = (params, fields = {}, options = {}) => {
  options.lean = true;

  return Session.find(params, fields, options);
};

const update = (params, obj, options = {}) => {
  options.lean = true;
  options.new = true;

  return Session.findOneAndUpdate(params, obj, options);
};

const updateMany = (params, obj, options = {}) => {
  options.lean = true;
  options.new = true;

  return Session.updateMany(params, obj, options);
};

module.exports = { create, get, getMany, update, updateMany };

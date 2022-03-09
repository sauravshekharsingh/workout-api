require("dotenv").config();
const User = require("./../models/User/user.model");

const create = (obj) => {
  return new User(obj).save();
};

const get = (params, fields, options = {}) => {
  options.lean = true;

  return User.findOne(params, fields, options);
};

const update = (params, obj, options = {}) => {
  options.lean = true;
  options.new = true;

  return User.findOneAndUpdate(params, obj, options);
};

module.exports = { create, get, update };

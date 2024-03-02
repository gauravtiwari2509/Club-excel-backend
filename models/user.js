const mongoose = require("mongoose")

const registration = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },

  batch: {
    type: String,
  },

  gender: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
  },
  branch: {
    type: String,
  },
})

const User = mongoose.model("Userreg", registration)

module.exports = User

const mongoose = require("mongoose")

const amongUs = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
  },
  collegeemail: {
    type: String,
  },
  contact: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
  },

  batch: {
    type: String,
  },

  gender: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
  },
  isNistian: {
    type: String,
  },
  isLocalite: {
    type: String,
  },
  otherCollege: {
    type: String,
  },
})

const AmongUs = mongoose.model("Amongus", amongUs)
module.exports = AmongUs

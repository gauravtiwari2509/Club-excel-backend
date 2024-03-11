const mongoose = require("mongoose")

const codeCrushed = new mongoose.Schema({
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
  skill: {
    type: String,
  },
  branch: {
    type: String,
  },
  hackerrankid: {
    type: String,
  },
  area: {
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

const CodeCrushed = mongoose.model("CodeCrushed", codeCrushed)
module.exports = CodeCrushed

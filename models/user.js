const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  contact: {
    type: String,
  },
  roll: String,
  why: String,
  batch: String,
  hackerrankid: String,
  area: String,
  gender: String,
  skill: String,
  branch: String,
})

const User = mongoose.model("Userregd", userSchema)

module.exports = User

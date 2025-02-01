const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  contact: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  skill: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: false,
  },
}, {
  timestamps: true,
});


const GithubWorkshopCandidate = mongoose.model("GithubWorkshopCandidate", userSchema);

module.exports = GithubWorkshopCandidate;

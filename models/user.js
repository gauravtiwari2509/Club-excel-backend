const mongoose = require("mongoose")

const registrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String, // Changed from Number to String to match the form data type
    required: true,
  },
  regNo: {
    type: String, // Assuming regNo corresponds to a registration number
  },
  nistEmail: {
    type: String, // Changed from email to nistEmail to match the form field
    required: true,
  },
  personalEmail: {
    type: String,
  },
  gender: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
  },
  hackerrankId: {
    type: String,
  },
  techStacks: {
    type: String,
  },
  mobile: {
    type: String,
    required: true,
  },
  hostelLocal: {
    type: String,
  },
  reason: {
    type: String,
  },
})

const User = mongoose.model("Userreg", registrationSchema)

module.exports = User

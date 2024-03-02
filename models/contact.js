const mongoose = require("mongoose")

const emailValidator = (value) => {
  const regex = /^[a-zA-Z0-9._-]+@nist\.edu$/
  return regex.test(value)
}
const contactSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: emailValidator,
      message: (props) => `${props.value} is not a valid NIST email address!`,
    },
  },
  phone: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

const ContactUs = mongoose.model("Contact", contactSchema)
module.exports = ContactUs

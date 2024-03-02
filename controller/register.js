const User = require("../models/user")
const ContactUs = require("../models/contact")

const emailValidator = (value) => {
  const regex = /^[a-zA-Z0-9._-]+@nist\.edu$/
  return regex.test(value)
}
module.exports.register = async (req, res, next) => {
  try {
    const {
      name,
      email,
      contact,
      roll,
      // why,
      batch,
      // hackerrankid,
      // area,
      gender,
      skill,
      branch,
    } = req.body
    console.log(req.body)

    if (
      !name ||
      !email ||
      !contact ||
      !roll ||
      // !why ||
      // !hackerrankid ||
      !gender
    ) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided" })
    }

    if (!emailValidator(email)) {
      return res.status(400).json({ error: "Invalid NIST email address" })
    }

    const newUser = new User({
      name,
      email,
      contact,
      roll,
      // why,
      batch,
      // hackerrankid,
      // area,
      gender,
      skill,
      branch,
    })

    await newUser.save()

    res.status(201).json({ message: "Registration successful", user: newUser })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Registration failed" })
  }
}

module.exports.getRegisterUser = async (req, res, next) => {
  try {
    const allUsers = await User.find()
    res.status(200).json(allUsers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports.getUser = async (req, res, next) => {
  try {
    const { value } = req.params

    const user = await User.findOne({
      $or: [{ roll: value }, { contact: value }],
    })

    if (user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ error: "User not found" })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports.contactUs = async (req, res, next) => {
  try {
    const { fname, lname, email, phone, subject, message } = req.body
    console.log(req.body)
    if (!emailValidator(email)) {
      return res.status(400).json({ error: "Invalid NIST email address" })
    }
    const newContact = new ContactUs({
      fname,
      lname,
      email,
      phone,
      subject,
      message,
    })
    await newContact.save()
    res.status(201).json({ message: "Contact form submitted successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

module.exports.getAllContact = async (req, res, next) => {
  try {
    const allContactSubmissions = await ContactUs.find()
    res.status(200).json(allContactSubmissions)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

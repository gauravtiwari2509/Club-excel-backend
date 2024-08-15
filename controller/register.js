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
      rollNo,
      regNo,
      nistEmail,
      personalEmail,
      gender,
      branch,
      hackerrankId,
      techStacks,
      mobile,
      hostelLocal,
      reason,
    } = req.body

    if (!name || !rollNo || !nistEmail || !gender || !mobile) {
      return res
        .status(400)
        .json({ error: "All required fields must be provided" })
    }

    if (!emailValidator(nistEmail)) {
      return res.status(400).json({ error: "Invalid NIST email address" })
    }

    const existingUser = await User.findOne({ nistEmail })
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" })
    }

    const newUser = new User({
      name,
      rollNo,
      regNo,
      nistEmail,
      personalEmail,
      gender,
      branch,
      hackerrankId,
      techStacks,
      mobile,
      hostelLocal,
      reason,
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
    const { rollNo } = req.params
    const user = await User.findOne({
      rollNo,
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

// module.exports.contactUs = async (req, res, next) => {
//   try {
//     const { fname, lname, email, phone, subject, message } = req.body
//     console.log(req.body)
//     if (!emailValidator(email)) {
//       return res.status(400).json({ error: "Invalid NIST email address" })
//     }
//     const newContact = new ContactUs({
//       fname,
//       lname,
//       email,
//       phone,
//       subject,
//       message,
//     })
//     await newContact.save()
//     res.status(201).json({ message: "Contact form submitted successfully" })
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: "Internal Server Error" })
//   }
// }

// module.exports.getAllContact = async (req, res, next) => {
//   try {
//     const allContactSubmissions = await ContactUs.find()
//     res.status(200).json(allContactSubmissions)
//   } catch (error) {
//     console.error(error)
//     res.status(500).json({ error: "Internal Server Error" })
//   }
// }

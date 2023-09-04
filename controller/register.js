module.exports.register = async (req, res, next) => {
  try {
    // Extract user registration data from the request body

    // console.log(req.body)
    const {
      name,
      email,
      contact,
      roll,
      why,
      batch,
      hackerrankid,
      area,
      gender,
      skill,
      branch,
    } = req.body

    // Create a new User instance
    const newUser = new User({
      name,
      email,
      contact,
      roll,
      why,
      batch,
      hackerrankid,
      area,
      gender,
      skill,
      branch,
    })

    // Save the new user to the database
    await newUser.save()

    // Respond with a success message
    res.status(201).json({ message: "Registration successful", user: newUser })
  } catch (error) {
    // Handle registration errors
    console.error(error)
    res.status(500).json({ error: "Registration failed" })
  }
}

const User = require("../models/user")

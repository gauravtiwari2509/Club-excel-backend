const AmongUs = require("../models/sankalpamong")

module.exports.amongUs = async (req, res, next) => {
  try {
    const {
      name,
      email,
      collegeemail,
      contact,
      roll,
      batch,
      gender,
      branch,
      otherCollege,
      isNistian,
      isLocalite,
    } = req.body

    if (!name || !collegeemail || !contact || !batch || !gender || !branch) {
      return res
        .status(400)
        .json({ error: "All required fields must be provide" })
    }

    const existingUser = await AmongUs.findOne({ email: email || collegeemail })
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" })
    }

    const newReg = new AmongUs({
      name,
      email,
      collegeemail,
      contact,
      roll,
      batch,
      gender,
      branch,
      otherCollege,
      isNistian,
      isLocalite,
    })

    await newReg.save()
    res.status(201).json({ message: "Registration Succesfull", user: newReg })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Registration failed" })
  }
}

module.exports.getamongusdata = async (req, res, next) => {
  try {
    const allUsers = await AmongUs.find()
    res.status(200).json(allUsers)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}

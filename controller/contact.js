const ContactUs = require("../models/contact")

const emailValidator = (value) => {
  const regex = /^[a-zA-Z0-9._-]+@nist\.edu$/
  return regex.test(value)
}

module.exports.contactUs = async (req, res, next) => {
  try {
    const { fname, lname, email, phone, subject, message } = req.body
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

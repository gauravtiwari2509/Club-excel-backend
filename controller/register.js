const GithubWorkshopCandidate = require("../models/user");
// const User = require("../models/user")


const emailValidator = (value) => {
  const regex = /^[a-zA-Z0-9._-]+@nist\.edu$/;
  return regex.test(value);
};


module.exports.register = async (req, res, next) => {
  try {
    const {
      name,
      roll,
      email,
      contact,
      gender,
      batch,
      branch,
      skill,
      area,
    } = req.body;


    if (!name || !roll || !email || !contact || !gender || !batch || !branch || !skill) {
      return res.status(400).json({ error: "All required fields must be provided." });
    }


    if (!emailValidator(email)) {
      return res.status(400).json({ error: "Invalid NIST email address." });
    }


    const existingUser = await GithubWorkshopCandidate.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered." });
    }


    const newUser = new GithubWorkshopCandidate({
      name,
      roll,
      email,
      contact,
      gender,
      batch,
      branch,
      skill,
      area,
    });


    await newUser.save();


    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed." });
  }
};


module.exports.getRegisterUser = async (req, res, next) => {
  try {
    const allUsers = await GithubWorkshopCandidate.find();
    res.status(200).json(allUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports.getUser = async (req, res, next) => {
  try {
    const { roll } = req.params;
    const user = await GithubWorkshopCandidate.findOne({ roll });

    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

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

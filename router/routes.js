const router = require("express").Router()
// const contactUs = require("../controller/contact")
const {
  register,
  getRegisterUser,
  contactUs,
  getAllContact,
  getUser,
} = require("../controller/register")

router.post("/register", register)
router.get("/get-register-user", getRegisterUser)
router.get("/getuser/:value", getUser)
router.post("/contact", contactUs)
router.get("/contact", getAllContact)

module.exports = router

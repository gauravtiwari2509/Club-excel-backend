const router = require("express").Router()
// const contactUs = require("../controller/contact")
const {
  register,
  getRegisterUser,
  contactUs,
  getAllContact,
  getUser,
} = require("../controller/register")
const { amongUs, getamongusdata } = require("../controller/sankalpamong")
const { codeCrushed, getcodecrushed } = require("../controller/sankalpcode")

router.post("/register", register)
router.get("/get-register-user", getRegisterUser)
router.get("/getuser/:rollNo", getUser)
// router.post("/contact", contactUs)
// router.get("/contact", getAllContact)
// router.get("/amongus-data", getamongusdata)
// router.get("/codecrushed-data", getcodecrushed)
// router.post("/codecrushed", codeCrushed)
// router.post("/amongus", amongUs)

module.exports = router

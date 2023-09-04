const router = require("express").Router()
const { register } = require("../controller/register")

router.post("/register", register)

module.exports = router

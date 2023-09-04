const express = require("express")
const cors = require("cors")
var bodyParser = require("body-parser")
require("dotenv").config()
const app = express()
const mongoose = require("mongoose")
const port = 8000
const router = require("./router/routes")

app.use(express.json())

mongoose
  .connect(
    "mongodb+srv://Sanjeev:Sanju266@cluster0.erlocnt.mongodb.net/FullStack?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to MongoDB")
  })
  .catch((err) => {
    console.log(err)
  })

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use("/api", router)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

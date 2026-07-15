const express = require("express")
const sequelize = require("./config/database")
const routes = require("./routes/funcionarioRoutes")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)


module.exports = app
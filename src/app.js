const express = require("express")
const sequelize = require("./config/database")
const routes = require("./routes/funcionarioRoutes")

const app = express()

app.use(express.json())
app.use(routes)

sequelize.sync()


module.exports = app
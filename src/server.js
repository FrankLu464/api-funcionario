const app = require("./app")
require("dotenv").config()
const sequelize = require("./config/database")

const PORT = 3002

sequelize.sync()

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado na porta ${PORT}`)
})
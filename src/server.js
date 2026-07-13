const app = require("./app")
require("dotenv").config()

const PORT = 3002

sequelize.sync()

app.listen(PORT, ()=>{
    console.log(`Servidor iniciado na porta ${PORT}`)
})
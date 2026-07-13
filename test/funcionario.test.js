const request = require("supertest")

const app = require("../src/app")

// Escrita de um teste
describe("API de funcionarios", ()=>{
    it("Deve cadastrar um funcionario", async()=>{
        const resposta = await request(app).post("/funcionarios").send({
            nome: "Maria",
            cargo: "Analista"
        })

        expect(resposta.statusCode).toBe(201)

    })
})

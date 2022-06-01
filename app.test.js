const request = require("supertest")

const app = require("./app")

describe("app", ()=> {
    it("sends a welcome message", async()=> {
        const response = await request(app).get('/');
        expect(response.text).toEqual("Hello, world!")
    })
})
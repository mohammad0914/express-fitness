const request = require("supertest")
const fs = require('fs')

const app = require("./app")
const data = require('./data-for-testing')
const { parse } = require("path")


// BASIC EXPRESS APP 
describe("Basic Express app", ()=> {
    it("has an app.js file", ()=> {
        expect(fs.existsSync('./app.js')).toEqual(true)
    })
    it("has a server.js file", ()=> {
        expect(fs.existsSync('./server.js')).toEqual(true)
    })
    it("has a package.json file", ()=> {
        expect(fs.existsSync('./package.json')).toEqual(true)
    })
    if (process.env.NODE_ENV !== 'test') {
        it("has a .env file", ()=> {
            expect(fs.existsSync('./.env')).toEqual(true)
        })
    }
 
    it("has a .gitignore file", ()=> {
        expect(fs.existsSync('./.gitignore')).toEqual(true)
    })
    it("sends a welcome message", async()=> {
        const response = await request(app).get('/');
        expect(response.text).toEqual("Hello, world!")
    })
})

// CONFIRM FILES AND FOLDERS

describe("Models are in correct folder and named correctly", ()=> {
    it("has a locations model", ()=> {
        expect(fs.existsSync('./models/locations.js')).toEqual(true)
    })
    it("has a people model", ()=> {
        expect(fs.existsSync('./models/people.js')).toEqual(true)
    })
    it("has a plans model", ()=> {
        expect(fs.existsSync('./models/plans.js')).toEqual(true)
    })
    it("has a equipment model", ()=> {
        expect(fs.existsSync('./models/equipment.js')).toEqual(true)
    })
    it("has a specialEvents model", ()=> {
        expect(fs.existsSync('./models/specialEvents.js')).toEqual(true)
    })

})


describe("Controllers are in correct folder and named correctly", ()=> {
    it("has a locations controller", ()=> {
        expect(fs.existsSync('./controllers/locations.controller.js')).toEqual(true)
    })
    it("has a people controller", ()=> {
        expect(fs.existsSync('./controllers/people.controller.js')).toEqual(true)
    })
    it("has a plans controller", ()=> {
        expect(fs.existsSync('./controllers/plans.controller.js')).toEqual(true)
    })
    it("has a equipment controller", ()=> {
        expect(fs.existsSync('./controllers/equipment.controller.js')).toEqual(true)
    })
    it("has a specialEvents controller", ()=> {
        expect(fs.existsSync('./controllers/specialEvents.controller.js')).toEqual(true)
    })
})


describe("Each model has an index route", ()=> {
    it("Has an index route for locations", async () => {
        const response = await request(app).get("/locations")
        expect(response.body).toEqual(data.locations)
    })

    it("Has an index route for people", async () => {
        const response = await request(app).get("/people")
        expect(response.body).toEqual(data.people)
    })
    it("Has an index route for plans", async () => {
        const response = await request(app).get("/plans")
        expect(response.body).toEqual(data.plans)
    })
    it("Has an index route for equipment", async () => {
        const response = await request(app).get("/equipment")
        expect(response.body).toEqual(data.equipment)
    })
    it("Has an index route for specialEvents", async () => {
        const response = await request(app).get("/specialEvents")
        expect(response.body).toEqual(data.specialEvents)
    })
})
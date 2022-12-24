const express = require("express");
const register = require("../controller/register.controller");
const registerModel = require("../model/register.model")
const registerRoute = express.Router();


registerRoute.get("/signup", async (req, res) => {
    let user = await registerModel.find()
    res.status(201).send(user)
})

//varify login
registerRoute.post("/login", async (req, res) => {
    try {
        const {status,token} = await register.login(req.body)
        res.status(201).send(token)
    } catch (e) {
        res.status(404).send(e.message)
    }
})

//Veryfy token
registerRoute.get("/verifytoken/", async (req, res) => {
    const { token } = req.headers

    try {
        const detail = await register.tokenvarifucation({token})
        const user = await registerModel.findOne({ email : detail.email })
        res.status(201).send(user)
    } catch (e) {
        res.status(404).send(e.message)
    }
})

registerRoute.patch("/logout", async(req,res)=> {

    const { token } = req.headers

    try{
        const detail = await register.tokenvarifucation({token})
        const user = await registerModel.findOneAndUpdate({ email : detail.email },  { $set : { loggedIn : false } })
       res.send("Logout Succesfull")
    }
    catch(e){
        res.status(404).send(e.message)
    }
})

//Get user details by id
registerRoute.get("/signup/:id", async (req, res) => {
    try {
        let user = await registerModel.find({ _id: req.params.id })
        res.status(201).send(user)
    } catch (e) {
        res.status(404).send("Credential Not Found")
    }
})

//post requset for registration
registerRoute.post("/signup", async (req, res) => {
    try {
        let token = await register.signup(req.body)
        res.status(201).send(token);
    } catch (e) {
        res.status(404).send(e.message)
    }
})

//Delete registered data by id
registerRoute.delete("/signup/:id", async (req, res) => {
    try {
        let user = await registerModel.deleteMany({ _id: req.params.id })
        res.status(201).send(user)
    } catch (e) {
        res.status(404).send(e.message)
    }
})

module.exports = registerRoute
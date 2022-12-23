const express = require("express");
// const credController = require("../controller/signup.controller");
const todoModel = require("../model/todos.model")
const todoRoute = express.Router();
const jwt = require("jsonwebtoken");
const registerModel = require("../model/register.model");

todoRoute.get("/", async (req, res) => {
    const {uid} = req.headers
    console.log(uid)
    let date = new Date()
    date = date.toLocaleDateString() ;

    try{
            let userData = await registerModel.find({_id:uid}).populate(["todos"])
            // userData0 = JSON.parse(userData)
            // console.log(userData)
            // let todaysTodos = userData.todos.filter((el)=>el.date==date)
            res.send({ success : true, userData : userData })
        
    }
    catch(e){
        res.send('error h bsdk')
    }
})

todoRoute.post("/todaystodo", async (req, res) => {
    let date = new Date()
    date = date.toLocaleDateString() ;
    let todos = await todoModel.find({date})
    res.send(todos)
})

todoRoute.get("/:id", async (req, res) => {
    try {
            let user = await todoModel.find({ _id: req.params.id })
            res.send(user)
    } catch (e) {
        res.send("Credential Not Found")
    }
})

todoRoute.post("/", async (req, res) => {
    let date = new Date()
    date = date.toLocaleDateString() ;
    const { todo, user_id } = req.body 
    try {
        let data= await todoModel.find({user_id,date})
        if(data.length<5){
            const user = await todoModel.create({ todo, user_id, date })
            // await registerModel.findByIdAndUpdate(user_id, { $push : { todos : user._id } })
            res.send(user);
        }else{
            res.send("fuck urself");
        }      
    } catch (e) {
        res.send(e.message)
    }
})

todoRoute.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body
        // var user5 = await todoModel.findOne({ email })
        // const verify = await argon2.verify(user5.password, password);
        const user = await todoModel.find({ email, password })
        res.status(201).send(user);
    } catch (e) {
        res.status(404).send(e.message)
    }
})

todoRoute.delete("/:id", async (req, res) => {
    try {
        let user = await todoModel.deleteMany({  })
        res.send(user)
    } catch (e) {
        res.send(e.message)
    }
})

module.exports = todoRoute
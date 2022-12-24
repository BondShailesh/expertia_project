const express = require("express");
const todoModel = require("../model/todos.model")
const todoRoute = express.Router();
const todosController = require("../controller/todos.controller");

todoRoute.get("/", async (req, res) => {
    try {
        let userData = await todoModel.find()
        res.send({ success: true, userData: userData })
    }
    catch (e) {
        res.send(e)
    }
})

//Get todos acc to date and user logic are written in controller file
todoRoute.get("/todaystodo/", async (req, res) => {
    const { uid } = req.headers
    try {
        let todos = await todosController.getToday_Todos({ uid })
        res.send(todos)
    } catch (e) {
        return e
    }
})

todoRoute.get("/:id", async (req, res) => {
    try {
        let user = await todoModel.find({ _id: req.params.id })
        res.send(user)
    } catch (e) {
        res.send("Credential Not Found")
    }
})

// post todos on daily basis
todoRoute.post("/", async (req, res) => {
    const { todo, user_id } = req.body
    try {
        let { status, data } = await todosController.post_Todos({ todo, user_id })
        res.status(status).send(data)
    } catch (e) {
        res.send(e)
    }
})

todoRoute.delete("/:id", async (req, res) => {
    let {id} = req.params
    try {
        let user = await todoModel.deleteOne({_id:id})
        res.send(user)
    } catch (e) {
        res.send(e.message)
    }
})

module.exports = todoRoute
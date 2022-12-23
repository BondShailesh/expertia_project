const express = require('express');
const mongoose = require("mongoose");
const registerRoute = require('./src/route/register.route');
const todoRoute = require('./src/route/todos.route');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', registerRoute)
app.use('/todos', todoRoute)

app.listen(8080, () => {
    mongoose.connect("mongodb://localhost:27017", () => {
        console.log('working')
    })
})
const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors')
const registerRoute = require('./src/route/register.route');
const todoRoute = require('./src/route/todos.route');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/', registerRoute)
app.use('/todos', todoRoute)

app.listen(8080, () => {
    mongoose.connect("mongodb+srv://expertia_project:12345@cluster0.cqcpvcb.mongodb.net/?retryWrites=true&w=majority", () => {
        console.log('working')
    })
})
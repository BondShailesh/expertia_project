const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    todo: { type: String, required: true },
    date: {type: String, required: true},
    user_id:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "credential",
    },
});

const todoModel = mongoose.model("todo", todoSchema);

module.exports = todoModel;

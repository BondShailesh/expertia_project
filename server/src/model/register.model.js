const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  email: { type: String, required: true ,unique: true},
  password: { type: String, required: true },
  userName: { type: String },
  todos:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "todo",
    }],
},{
  timestamps : true
});

const registerModel = mongoose.model("credential", registerSchema);

module.exports = registerModel;

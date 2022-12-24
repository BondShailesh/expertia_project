const registerModel = require("../model/register.model");
const todoModel = require("../model/todos.model");


const todosController = {
    getToday_Todos: async ({ uid }) => {
        try {
            let date = new Date()
            date = date.toLocaleDateString();
            let userData = await registerModel.find({ _id: uid }).populate(["todos"])
            let todaysTodos = userData[0].todos.filter((el) => el.date == date)
            return todaysTodos
        } catch (e) {
            return e.message
        }
    },
    // Post todays on daily basis not more than 5 logic
   post_Todos: async({todo, user_id})=>{
    let date = new Date()
    date = date.toLocaleDateString();
    let data = await todoModel.find({ user_id, date })

    if (data.length < 5) {
        const data = await todoModel.create({ todo, user_id, date })
        await registerModel.findByIdAndUpdate(user_id, { $push: { todos: data._id } })
        return {status:201,data}
    } else {
        return {status:429,data:'Daily limit exceeded'}
    }
   }
}

module.exports = todosController
const jwt = require('jsonwebtoken');
const registerModel = require('../model/register.model');

const register = {
    signup: async (creds) => {
        let { email, userName } = creds
        try {
            await registerModel.create({ ...creds })
            let token = jwt.sign({ email, userName }, "Experia123")
            return token
        } catch (e) {
            return e
        }
    },

    login: async (creds) => {
        try {
            const user = await registerModel.findOne({ ...creds })
            if (user) {
                let token = jwt.sign({ ...creds }, "Experia123")
                return { status: 201, token }
            } else {
                console.log('notfounr');
                return { status: 404, token: "NotFound" }
            }
        } catch (e) {
            console.log(e.message);
            return e
        }
    }
}
module.exports = register
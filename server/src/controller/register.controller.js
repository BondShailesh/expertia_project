const jwt = require('jsonwebtoken');
const registerModel = require('../model/register.model');

const register = {
    signup: async (creds) => {
        let { email, userName } = creds
        try {
            let data = await registerModel.create({ ...creds })
            let id = data._id
            let token = jwt.sign({ email, userName, id }, "Experia123")
            return token
        } catch (e) {
            return e
        }
    },

    login: async (creds) => {
        try {
            const user = await registerModel.findOne({ ...creds })
            if (user) {
                let token = jwt.sign({ ...creds }, "Experia123", { expiresIn: '30d' })
                return { status: 201, token }
            } else {
                return { status: 404, token: "NotFound" }
            }
        } catch (e) {

            return e
        }
    },
    tokenvarifucation: async ({ token }) => {
        let verify = jwt.verify(token, 'Experia123')
        if (verify) {
            let value = jwt.decode(token, 'Experia123')
            return value
        }
    }
}
module.exports = register
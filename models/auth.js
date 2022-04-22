const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    }
}
)

module.exports = mongoose.model('User', authSchema)
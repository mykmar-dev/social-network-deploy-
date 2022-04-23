const mongoose = require('mongoose');

const { getConfigs } = require('../middleware/get-configs')

const usersSchema = mongoose.Schema({
    email: getConfigs(String, true),
    password: getConfigs(String, true),
    nickname: getConfigs(String, true),
    status: getConfigs(String, true),
    photo: getConfigs(String, true),
    profile: {
        fullName: getConfigs(String, true),
        aboutMe: getConfigs(String, true),
        lookingForAJob: getConfigs(String, true),
        lookingForAJobDescription: getConfigs(String, true),
        contacts: {
            telegram: getConfigs(String, true),
            discord: getConfigs(String, true),
            gitHub: getConfigs(String, true),
            facebook: getConfigs(String, true),
            instagram: getConfigs(String, true),
        },
        location: {
            country: getConfigs(String, true),
            city: getConfigs(String, true)
        }
    },
    subscriptions: [
        {
            type: mongoose.Schema.Types.ObjectId
        }
    ]
}
)

module.exports = mongoose.model('User', usersSchema)
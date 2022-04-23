const mongoose = require('mongoose');

const { getConfigs } = require('../middleware/get-configs')

const usersSchema = mongoose.Schema({
    email: getConfigs(String, true),
    password: getConfigs(String, true),
    nickname: getConfigs(String, false),
    status: getConfigs(String, false),
    photo: getConfigs(String, false),
    profile: {
        fullName: getConfigs(String, false),
        aboutMe: getConfigs(String, false),
        lookingForAJob: getConfigs(String, false),
        lookingForAJobDescription: getConfigs(String, false),
        contacts: {
            telegram: getConfigs(String, false),
            discord: getConfigs(String, false),
            git: getConfigs(String, false),
            facebook: getConfigs(String, false),
            instagram: getConfigs(String, false),
        },
        location: {
            country: getConfigs(String, false),
            city: getConfigs(String, false)
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
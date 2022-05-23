const mongoose = require('mongoose');

const { getConfigs } = require('../middleware/get-configs')

const usersSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: getConfigs(String, false, ''),
    status: getConfigs(String, false, ''),
    profile: {
        photo: getConfigs(String, false, ''),
        filename: getConfigs(String, false, ''),
        fullName: getConfigs(String, false, ''),
        aboutMe: getConfigs(String, false, ''),
        lookingForAJob: getConfigs(String, false, ''),
        lookingForAJobDescription: getConfigs(String, false, ''),
        contacts: {
            telegram: getConfigs(String, false, ''),
            discord: getConfigs(String, false, ''),
            git: getConfigs(String, false, ''),
            facebook: getConfigs(String, false, ''),
            instagram: getConfigs(String, false, ''),
        },
        location: {
            country: getConfigs(String, false, ''),
            city: getConfigs(String, false, '')
        }
    },
    subscriptions: [
        {
            type: mongoose.Schema.Types.ObjectId,
        }
    ],
    posts: [
        {
            _id: {
                type: mongoose.Schema.Types.ObjectId
            },
            message: getConfigs(String, false, ''),
            likesCount: getConfigs(Number, false, 0)
        }
    ]
}
)

module.exports = mongoose.model('User', usersSchema)
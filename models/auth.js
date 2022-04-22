const mongoose = require('mongoose');

const {getConfigs} = require('../middleware/get-configs')

const authSchema = mongoose.Schema({
    email: getConfigs(String, true),
    password: getConfigs(String, true),
    login: getConfigs(String, true),
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
        }
    }
}
)

module.exports = mongoose.model('User', authSchema)
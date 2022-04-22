const mongoose = require('mongoose');

const getConfigs = require('../middleware/get-configs')

const usersSchema = mongoose.Schema({
    items: [
        {
            id: getConfigs(Number, true),
            name: getConfigs(String, true),
            status: getConfigs(String, true),
            follow: getConfigs(Boolean, true),
            photos: {
                small: getConfigs(String, true),
                large: getConfigs(String, true),
            },
            location: {
                country: getConfigs(String, true),
                city: getConfigs(String, true)
            }
        }
    ]
}
)

module.exports = mongoose.model('Users', usersSchema)
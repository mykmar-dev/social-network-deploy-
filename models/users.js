const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    items: [
        {
            id: {
                type: Number,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            status: {
                type: String,
                required: true
            },
            follow: {
                type: Boolean,
                required: true
            },
            photos: {
                small: {
                    type: String,
                    required: true
                },
                large: {
                    type: String,
                    required: true
                }
            },
            location: {
                country: {
                    type: String,
                    required: true
                },
                city: {
                    type: String,
                    required: true
                }
            }
        }
    ]
}
)

module.exports = mongoose.model('Users', usersSchema)
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.isAuth = (req, res, next) => {
    let token
    let decodedToken
    try {
        token = req.cookies.token
        decodedToken = jwt.verify(token, 'secret')
        User.findById(decodedToken.userId)
        .then(user => {
            req.authUser = user
            return next()
        })
    }
    catch (err) {
        return next(err)
    } 
}
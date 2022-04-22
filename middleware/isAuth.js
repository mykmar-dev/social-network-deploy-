const jwt = require('jsonwebtoken')

exports.isAuth = (req, res, next) => {
    const token = rawCookie.split('=').parsedCookie[1]
    let decodedToken
    try {
        decodedToken = jwt.verify(token, 'secret')
    }
    catch (err) {
        return next(err)
    }
    req.userId = decodedToken.userId
    next()
}
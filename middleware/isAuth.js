const jwt = require('jsonwebtoken')

exports.isAuth = (req, res, next) => {
    let token
    let decodedToken
    try {
        token = req.cookies.split('=').parsedCookie[1]
        decodedToken = jwt.verify(token, 'secret')
    }
    catch (err) {
        return next(err)
    }
    req.userId = decodedToken.userId
    next()
}
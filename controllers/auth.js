const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Auth = require('../models/auth')

exports.getMe = (req, res, next) => {
    const userId = req.userId
    Auth.findById(userId)
    .then(user => {
        const {email, login} = user
        res.send({id: userId, login, email, resultCode: 0})
    })
    .catch(err => next(err))
}

exports.postLogin = async (req, res, next) => {
    try {
        const { email, password, rememberMe } = req.body
        const user = await Auth.findOne({ email })
        const token = getToken(user._id.toString())
        if (!user) {
            const hashedPassword = bcrypt.hash(password, 12)
            const newUser = new Auth({
                email,
                password: hashedPassword,
                login: 'No name yet'
            })
            await newUser.save()
            if (!rememberMe)
                res.coockie('token', token).status(200).send({ message: 'Authenticated', resultCode: 0 })
            else res.coockie('token', token, { maxAge: 24 * 60 * 60 }).status(200).send({ message: 'Authenticated', resultCode: 0 })
    
        }
        else {
            const isEqual = bcrypt.compare(password, user.password)
            if (!isEqual)
                throw new Error('Incorrect password!')
            if (!rememberMe)
                res.coockie('token', token).status(201).send({ message: 'User created', resultCode: 0 })
            else res.coockie('token', token, { maxAge: 86400000 }).status(201).send({ message: 'Authenticated', resultCode: 0 })
        }
    }
    catch(err) {
        next(err)
    }
}

exports.deleteLogout = (req, res, next) => {
    try {
        res.clearCookie().send({message: 'logged out', resultCode: 0})
    }
    catch(err) {
        next(err)
    }
}


const getToken = (userId, expiration = '1d') => {
    return jwt.sign({
        userId,
    },
        'secret',
        { expiresIn: expiration }
    )
}
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

exports.getMe = (req, res, next) => {
    const authUser = req.authUser
    const { email, nickname } = authUser
    res.status(200).send({ message: 'Got your user data', resultCode: 0, data: { id: authUser._id, nickname, email } })
}

exports.postLogin = async (req, res, next) => {
    try {
        const { email, password, rememberMe } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            const hashedPassword = await bcrypt.hash(password, 12)
            const profile = {
                fullName: '',
                aboutMe: '',
                lookingForAJob: '',
                lookingForAJobDescription: '',
                contacts: {
                    telegram: '',
                    discord: '',
                    git: '',
                    facebook: '',
                    instagram: '',
                },
                location: {
                    country: '',
                    city: ''
                }
            }
            const newUser = new User({
                email,
                password: hashedPassword,
                nickname: '',
                status: '',
                photo: '',
                profile,
                subscriptions: []
            })
            const result = await newUser.save()
            const token = getToken(result._id.toString())
            if (!rememberMe)
                res.cookie('token', token).status(200).send({ message: 'User created', resultCode: 0 })
            else res.cookie('token', token, { maxAge: 86400000 }).status(200).send({ message: 'User created and remembered', resultCode: 0 })

        }
        else {
            const token = getToken(user._id.toString())
            const isEqual = bcrypt.compare(password, user.password)
            if (!isEqual)
                throw new Error('Incorrect password!')
            if (!rememberMe)
                res.cookie('token', token).status(201).send({ message: 'Authenticated', resultCode: 0 })
            else res.cookie('token', token, { maxAge: 86400000 }).status(201).send({ message: 'Authenticated and remembered', resultCode: 0 })
        }
    }
    catch (err) {
        next(err)
    }
}

exports.deleteLogout = (req, res, next) => {
    res.clearCookie('token').status(200).send({ message: 'logged out', resultCode: 0 })
}


const getToken = (userId, expiration = '1d') => {
    return jwt.sign({
        userId,
    },
        'secret',
        { expiresIn: expiration }
    )
}
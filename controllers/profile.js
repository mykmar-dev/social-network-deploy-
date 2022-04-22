const Auth = require('../models/auth')

exports.getProfile = (req, res, next) => {
    const userId = req.params.userId
    Auth.findById(userId)
    .then(user => {
        res.status(200).send({message: 'Got profile', profile: user.profile})
    })
    .catch(err => next(err))
}

exports.getStatus = (req, res, next) => {
    const userId = req.params.userId
    Auth.findById(userId)
    .then(user => {
        res.status(200).send({message: 'Got status', status: user.status})
    })
    .catch(err => next(err))
}

exports.putStatus = (req, res, next) => {
    const userId = req.userId
    const newStatus = req.body.status
    Auth.findById(userId)
    .then(user => {
        user.status = newStatus
        return user.save() 
    })
    .then(result => {
        res.status(200).send({message: 'Updated status', status: user.status})
    })
    .catch(err => next(err))
}

exports.putPhoto = (req, res, next) => {
    const userId = req.userId
    if(!req.file)
        throw new Error('No file uploaded!')
    const newPhoto = req.file.path
    Auth.findById(userId)
    .then(user => {
        user.photo = newPhoto
        return user.save() 
    })
    .then(result => {
        res.status(200).send({message: 'Updated photo', photo: user.photo})
    })
    .catch(err => next(err))
}

//Fucking formData how I supposed to parse it?
exports.putPhoto = (req, res, next) => {
    res.send({message: 'can`t process yet', resultCode: 1})
}
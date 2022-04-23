const User = require('../models/user')

exports.getProfile = (req, res, next) => {
    const userId = req.params.userId
    User.findById(userId, {profile: 1})
        .then(user => {
            res.status(200).send({ message: 'Got profile', resultCode: 0, data: {profile: user.profile} })
        })
        .catch(err => next(err))
}

exports.getStatus = (req, res, next) => {
    const userId = req.params.userId
    User.findById(userId, {status: 1})
        .then(user => {
            res.status(200).send({ message: 'Got status', resultCode: 0, data: {status: user.status} })
        })
        .catch(err => next(err))
}

exports.putStatus = (req, res, next) => {
    const authUser = req.authUser
    const newStatus = req.body.status
    authUser.status = newStatus
    authUser.save()
        .then(result => {
            res.status(200).send({ message: 'Updated status', resultCode: 0, data: {status: authUser.status} })
        })
        .catch(err => next(err))
}

exports.putPhoto = (req, res, next) => {
    const authUser = req.authUser
    if (!req.file)
        throw new Error('No file uploaded!')
    const newPhoto = req.file.path.split("\\").pop();
    authUser.photo = newPhoto
    authUser.save()
        .then(result => {
            res.status(200).send({ message: 'Updated photo', resultCode: 0, data: {photo: authUser.photo} })
        })
        .catch(err => next(err))
}

exports.putProfile = (req, res, next) => {
    const authUser = req.authUser
    const data = req.body
    authUser.profile = {
        ...authUser.profile, 
        contacts: {...authUser.profile.contacts}, 
        location: {...authUser.profile.location},
        ...data
    }
    authUser.save()
    .then(result => {
        res.send({ message: 'Profile updated', resultCode: 0 })
    })
    .catch(err => next(err))
}
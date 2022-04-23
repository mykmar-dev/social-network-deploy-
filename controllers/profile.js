const User = require('../models/user')
const {deleteFile} = require('../utils/deleteFile')

exports.getProfile = (req, res, next) => {
    const userId = req.params.userId
    User.findById(userId, {profile: 1})
        .then(user => {
            res.status(200).send({ message: 'Got profile', resultCode: 0, profile: user.profile})
        })
        .catch(err => next(err))
}

exports.getStatus = (req, res, next) => {
    const userId = req.params.userId
    User.findById(userId, {status: 1})
        .then(user => {
            res.status(200).send({ message: 'Got status', resultCode: 0, status: user.status })
        })
        .catch(err => next(err))
}

exports.putStatus = (req, res, next) => {
    const authUser = req.authUser
    const newStatus = req.body.status
    authUser.status = newStatus
    authUser.save()
        .then(result => {
            res.status(200).send({ message: 'Updated status', resultCode: 0, status: authUser.status })
        })
        .catch(err => next(err))
}

exports.putPhoto = (req, res, next) => {
    const authUser = req.authUser
    if (!req.file)
        throw new Error('No file uploaded!')
    const newPhoto = req.file.path.split("\\").pop()
    deleteFile(authUser.profile.photo)
    authUser.profile.photo = newPhoto
    authUser.save()
        .then(result => {
            res.status(200).send({ message: 'Updated photo', resultCode: 0, photo: authUser.profile.photo })
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
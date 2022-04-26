const cloudinary = require('cloudinary').v2
const streamifier = require('streamifier')
const User = require('../models/user')
const { deleteFile } = require('../images/deleteFile')

exports.getProfile = (req, res, next) => {
    const userId = req.params.userId
    User.findById(userId, { profile: 1 })
        .then(user => {
            res.status(200).send({ message: 'Got profile', resultCode: 0, profile: user.profile })
        })
        .catch(err => next(err))
}

exports.getStatus = (req, res, next) => {
    const userId = req.params.userId
    User.findById(userId, { status: 1 })
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
    if(authUser.profile.filename !== '') {
        cloudinary.uploader.destroy('' + authUser.profile.filename, result => {
            console.log(result)
        })
    }
    streamUpload(req).then(result => {
        const newPhoto = result.url
        authUser.profile.photo = newPhoto,
            authUser.profile.filename = result.public_id
        return authUser.save()
    })

        .then(result => {
            res.status(200).send({ message: 'Updated photo', resultCode: 0, photo: authUser.profile.photo })
        })
        .catch(err => next(err))
}

exports.putProfile = (req, res, next) => {
    const authUser = req.authUser
    const data = req.body
    const newNickname = req.body.nickname
    if (newNickname)
        authUser.nickname = newNickname
    authUser.profile = {
        ...authUser.profile,
        contacts: { ...authUser.profile.contacts },
        location: { ...authUser.profile.location },
        ...data
    }
    authUser.save()
        .then(result => {
            res.send({ message: 'Profile updated', resultCode: 0, nickname: result.nickname })
        })
        .catch(err => next(err));
}

let streamUpload = (req) => {
    return new Promise((resolve, reject) => {
        let stream = cloudinary.uploader.upload_stream(
            (error, result) => {
                if (result) {
                    resolve(result);
                } else {
                    reject(error);
                }
            }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
    });
};
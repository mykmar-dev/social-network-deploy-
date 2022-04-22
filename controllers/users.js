const Users = require('../models/users')

exports.getUsers = (req, res, next) => {
    const currentPage = req.query.page
    const pageSize = req.query.count
    Users.find()
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .then(users => {
            const parsedUsers = JSON.parse(users)
            res.status(200).send({parsedUsers, resultCode: 0})
        })
        .catch(err => next(err))
}

exports.putFollow = (req, res, next) => {
    const id = req.params
    Users.find({id})
    .then(user => {
        user.follow = true
        return user.save()
    })
    .then(result => {
        res.status(200).send({message: 'followed', resultCode: 0})
    })
    .catch(err => next(err))
}

exports.deleteUnfollow = (req, res, next) => {
    const id = req.params
    Users.find({id})
    .then(user => {
        user.follow = false
        return user.save()
    })
    .then(result => {
        res.status(200).send({message: 'unfollowed', resultCode: 0})
    })
    .catch(err => next(err))
}
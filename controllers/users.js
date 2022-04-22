const Users = require('../models/users')

exports.getUsers = (req, res, next) => {
    const currentPage = req.query.page
    const pageSize = req.query.count
    Users.find()
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .then(users => {
            const items = users.map(u => {return {...u._doc, _id: u._id.toString()}})
            res.status(200).send({message: 'Got users', items, totalCount: 1, resultCode: 0})
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
        res.status(200).send({message: 'Followed', resultCode: 0})
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
        res.status(200).send({message: 'Unfollowed', resultCode: 0})
    })
    .catch(err => next(err))
}
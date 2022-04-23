const User = require('../models/user')

exports.getUsers = (req, res, next) => {
    const currentPage = req.query.page
    const pageSize = req.query.count
    User.find({}, { _id: 1, photo: 1, nickname: 1, status: 1, location: 1, subscriptions: 1 })
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .then(users => {
            // const items = users.map(u => { return { ...u._doc, _id: u._id.toString() } })
            res.status(200).send({ message: 'Got users', resultCode: 0, data: {users, totalCount: 1} })
        })
        .catch(err => next(err))
}

exports.putFollow = (req, res, next) => {
    const idToFollow = req.params.id
    const authUser = req.authUser
    User.findById(idToFollow)
        .then(user => {
            authUser.subscriptions.push(user._id)
            return authUser.save()
        })
        .then(result => {
            res.status(200).send({ message: 'Followed', resultCode: 0 })
        })
        .catch(err => next(err))
}

exports.deleteUnfollow = (req, res, next) => {
    const idToUnfollow = req.params.id
    const authUser = req.authUser
    authUser.subscriptions = authUser.subscriptions.filter(id => id != idToUnfollow)
    authUser.save()
        .then(result => {
            res.status(200).send({ message: 'Unfollowed', resultCode: 0 })
        })
        .catch(err => next(err))
}
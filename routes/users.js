const express = require('express')

const usersControllers = require('../controllers/users')

const router = express.Router()

router.get('/users', usersControllers.getUsers)
router.put('/follow/:id', usersControllers.putFollow)
router.delete('/unfollow/:id', usersControllers.deleteUnfollow)

module.exports = router
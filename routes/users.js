const express = require('express')

const usersControllers = require('../controllers/users')
const {isAuth} = require('../middleware/isAuth')

const router = express.Router()

router.get('/users', usersControllers.getUsers)
router.put('/follow/:id', isAuth, usersControllers.putFollow)
router.delete('/unfollow/:id', isAuth, usersControllers.deleteUnfollow)

module.exports = router
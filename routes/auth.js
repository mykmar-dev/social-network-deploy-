const express = require('express')

const authControllers = require('../controllers/auth')
const {isAuth} = require('../middleware/isAuth')

const router = express.Router()

router.get('/me', isAuth, authControllers.getMe)
router.post('/login', authControllers.postLogin)
router.delete('/logout', authControllers.deleteLogout)

module.exports = router
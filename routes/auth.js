const { body } = require('express-validator')

const express = require('express')

const authControllers = require('../controllers/auth')
const { isAuth } = require('../middleware/isAuth')
const User = require('../models/user')

const router = express.Router()

router.get('/me', isAuth, authControllers.getMe)
router.post('/login',
    body('email')
        .trim()
        .isEmail()
        .withMessage('Please enter a valid email'),
    body('password')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Please enter a valid password'),
    authControllers.postLogin)
router.delete('/logout', authControllers.deleteLogout)

module.exports = router
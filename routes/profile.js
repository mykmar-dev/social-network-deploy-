const express = require('express')

const profileControllers = require('../controllers/profile')

const router = express.Router()

router.get('/:userId', profileControllers.getProfile)

module.exports = router
const express = require('express')

const profileControllers = require('../controllers/profile')
const {isAuth} = require('../middleware/isAuth')

const router = express.Router()

router.get('/:userId', profileControllers.getProfile)
router.get('/status/:userId', profileControllers.getStatus)
router.put('/status', isAuth, profileControllers.putStatus)
router.put('/photo', isAuth, profileControllers.putPhoto)
router.put('/', isAuth, profileControllers.putProfile)

module.exports = router
const router = require('express').Router()

router.use('/api', require('./gifRoutes.js'))

module.exports = router
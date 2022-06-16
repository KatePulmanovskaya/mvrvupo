const Router = require('express')
const router = new Router()
const statisticsController = require('../controllers/statisticsController')

router.get('/',statisticsController.getAll)

module.exports = router
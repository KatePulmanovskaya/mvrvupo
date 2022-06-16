const Router = require('express')
const router = new Router()
const theoryController = require('../controllers/theoryController')

router.get('/',theoryController.getAll)

module.exports = router
const Router = require('express')
const router = new Router()
const practiceController = require('../controllers/practiceController')

router.get('/',practiceController.getAll)

module.exports = router
const Router = require('express')
const router = new Router()
const testsController = require('../controllers/testsController')

router.get('/', testsController.getAll)
router.get('/questions', testsController.getAllQuestions)
router.get('/answers', testsController.getAllAnswers)
router.get('/:id',testsController.getOne)
router.post('/:id',testsController.updateStats)

module.exports = router 
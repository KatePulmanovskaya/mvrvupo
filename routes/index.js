const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const theoryRouter = require('./theoryRouter')
const practiceRouter = require('./practiceRouter')
const testsRouter = require('./testsRouter')
const statisticsRouter = require('./statisticsRouter')

router.use('/user', userRouter)
router.use('/theory', theoryRouter)
router.use('/practice', practiceRouter)
router.use('/tests', testsRouter)
router.use('/statistics',statisticsRouter)

module.exports = router
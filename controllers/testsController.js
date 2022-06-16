const {Tests} = require('../models/models')
const {Questions}= require('../models/models')
const {Answers, Statictics}= require('../models/models')

class TestsController {
    async getAllAnswers(req, res) {
        const {questionId} = req.query
        const answers = await Answers.findAll({where: {questionId}})
        return res.json(answers)
    }

    async getAllQuestions(req, res) {
        const {testId} = req.query
        const questions = await Questions.findAll({
            where: {testId},
            include:[{
                model: Answers,
                required: true,
                attributes: ['id', 'answer','is_right' ]
            }]
        })
        return res.json(questions)
    }
    async getAll(req, res) {
        const tests = await Tests.findAll()
        return res.json(tests)
    }
    async getOne(req, res) {
        const {id} = req.params
        const test = await Tests.findOne(
            {
                where: {id}
            },
        )
        return res.json(test)
    }

    async updateStats(req, res, next) {
        const {mark} = req.body
        const {id} = req.params

        const {userId} = req.body
        console.log(mark)
        const statistics = await Statictics.update({mark:mark},{where: {testId:id, userId:userId}})
        return res.json("good")
    }
}

module.exports = new TestsController()
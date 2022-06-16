const {Study} = require('../models/models')

class PracticeController {

    async getAll(req, res) {
        const practice = await Study.findAll({where:{typeStudyId:2}})
        return res.json(practice)
    }
}

module.exports = new PracticeController()
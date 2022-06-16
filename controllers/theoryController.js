const {Study} = require('../models/models')

class TheoryController {
    async getAll(req, res) {
        const {module} = req.query
        let theory
        if (module){
            theory = await Study.findAll({where:{typeStudyId:1, module}})
        }
        return res.json(theory)
    }
}

module.exports = new TheoryController()
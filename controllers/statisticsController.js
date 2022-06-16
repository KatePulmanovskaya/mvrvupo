const {Statictics, Tests} = require('../models/models')

class StatisticsController {
    async getAll(req, res) {
        const {userId} = req.query
        let statistics
        if (userId){
            statistics = await Tests.findAll({
                attributes: ['id', 'title'],
                include:[{
                    model: Statictics,
                    required: true,
                    attributes: [ 'mark' ],
                    where:{userId}
                }],
                order: [ [ 'id', 'ASC' ] ]
            })
        }
        return res.json(statistics)
    }
}

module.exports = new StatisticsController()
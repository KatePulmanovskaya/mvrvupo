const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {Users, Statictics} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        {id, email, role},
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {login, password} = req.body
        if (!login || !password) { 
            return next(ApiError.badRequest('Некорректный email или пароль'))
        }
        const candidate = await Users.findOne({where: {login}})
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await Users.create({login, password: hashPassword, roleId:7})
        let stats;
        for (let i=1;i<=22;i++){
            stats = await Statictics.create({testId:i,userId:user.id})
        }
        const token = generateJwt(user.id, user.login, user.roleId)
        return res.json({token})
    }

    async login(req, res, next) {
        const {login, password} = req.body
        const user = await Users.findOne({where: {login}})
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email, user.roleId)
        return res.json({token})
    }
 
    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.login, req.user.roleId)
        return res.json({token})
    }
}

module.exports = new UserController()
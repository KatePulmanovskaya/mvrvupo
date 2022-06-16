const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    last_name:{type: DataTypes.STRING},
    first_name:{type: DataTypes.STRING},
    father_name:{type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true,},
    password: {type: DataTypes.STRING},
    group: {type: DataTypes.STRING},
})

const Role = sequelize.define('role', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false}
})

const TypeStudy = sequelize.define('type_study', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, allowNull: false}
})

const Answers = sequelize.define('answers', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    answer:{type: DataTypes.STRING, allowNull: false},
    is_right:{type: DataTypes.BOOLEAN, allowNull: false}
})

const Questions = sequelize.define('questions', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    number: {type: DataTypes.INTEGER, allowNull: false},
    question:{type: DataTypes.STRING, allowNull: false},
    points:{type: DataTypes.INTEGER, allowNull: false}
})

const Study = sequelize.define('study', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull: false},
    name:{type: DataTypes.STRING, allowNull: false},
    link_view:{type: DataTypes.STRING},
    link_save:{type: DataTypes.STRING},
    module:{type: DataTypes.INTEGER}
})

const Tests = sequelize.define('tests', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:{type: DataTypes.STRING, allowNull: false},
    name:{type: DataTypes.STRING, allowNull: false},
    count:{type: DataTypes.INTEGER, allowNull: false},
    max_mark:{type: DataTypes.INTEGER, allowNull: false}
})
  
const Statictics = sequelize.define('statictics', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    mark:{type: DataTypes.DOUBLE},
    date:{type: DataTypes.DATE},
    title:{type: DataTypes.STRING}
})

Role.hasMany(Users)
Users.belongsTo(Role)

Users.hasMany(Statictics)
Statictics.belongsTo(Users)

Tests.hasMany(Statictics)
Statictics.belongsTo(Tests)

Tests.hasMany(Questions)
Questions.belongsTo(Tests)

Tests.hasMany(Study)
Study.belongsTo(Tests)

Questions.hasMany(Answers)
Answers.belongsTo(Questions)

TypeStudy.hasMany(Study)
Study.belongsTo(TypeStudy)

module.exports = {
    Users,
    Role,
    Statictics,
    Tests,
    Questions,
    Answers,
    Study,
    TypeStudy
}
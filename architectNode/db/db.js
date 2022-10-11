const {Sequelize} = require ('sequelize')
 module.exports= new  Sequelize('miniblog','root','',{dialect:'mysql', host:'localhost'})
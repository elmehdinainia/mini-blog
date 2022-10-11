const  sequelize = require("sequelize") ;
const  db = require('../db/db.js') ;



const {DataTypes} =sequelize
// ! creation de la table Product 
const Product = db.define('commentaire',{

    // id:{
    //     type : DataTypes.INTEGER.UNSIGNED,
    //     primaryKey :true,
    //     autoIncrement : true ,
    //     allowNull :  false
    // },
    
 
    name:{
        type : DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type : DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type : DataTypes.TEXT,
        allowNull:false,
    }
});

module.exports= Product 
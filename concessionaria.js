const Sequelize = require ('sequelize');
const db = require ('./db');
const ponto= db.define('moto',{
                                               
    chassiMoto: {                                      

        type: Sequelize.STRING(20),

        primaryKey: true,

        autoIncrement:true,

        allowNull:false,

    },
    
    nome: {

        type: Sequelize.STRING(10),

        allowNull:false

    },
    modelo: {

        type: Sequelize.STRING(10),

        allowNull:false

    },
    ano: {

        type: Sequelize.INTEGER(4),

        allowNull:false

    },

})

module.exports = ponto;  
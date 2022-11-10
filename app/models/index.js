const Sequelize = require("sequelize");
const dbConfig = require('../../db.config.js');

const sequelize = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig?.pool?.max,
        min: dbConfig?.pool?.min,
        acquire: dbConfig?.pool?.acquire,
        idle: dbConfig?.pool?.idle
      }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sampleTable = require("./data.model.js")(sequelize, Sequelize.DataTypes);
module.exports = db;
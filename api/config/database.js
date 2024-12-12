const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:@localhost:3306/hackathon", { 
    pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;

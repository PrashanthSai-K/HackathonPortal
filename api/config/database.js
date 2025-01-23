const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mysql://root:@localhost:3306/hackathon", { 
  retry: {
    max: 3 
  },
    pool: {
    max: 50,
    min: 5,
    acquire: 30000,
    idle: 10000
  }
});

module.exports = sequelize;

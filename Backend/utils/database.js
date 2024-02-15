const Sequelize = require('sequelize');
const sequelize = new Sequelize('player-data', 'root', 'password', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;

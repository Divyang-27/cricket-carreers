const Sequelize = require('sequelize');
const sequelize = new Sequelize('player-data', 'root', '16122019d', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;

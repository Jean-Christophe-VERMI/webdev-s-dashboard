const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');

class Day extends sequelize.Model {

};

Day.init({
  date: sequelize.DATE,
  text: sequelize.TEXT,
  code: sequelize.STRING,
  ref_source: sequelize.STRING,
  project_id: sequelize.INTEGER,
  
}, {
  sequelize: dbConnection,
  tableName: "days",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Day;
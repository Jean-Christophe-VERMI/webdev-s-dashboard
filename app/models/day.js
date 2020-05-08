const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');

class Day extends sequelize.Model {

};

Day.init({
  date: sequelize.DATE,
  text: sequelize.TEXT,
  code: sequelize.TEXT,
  ref_source: sequelize.TEXT,
  project_id: sequelize.INTEGER,
  
}, {
  sequelize: dbConnection,
  tableName: "days"
});



module.exports = Day;
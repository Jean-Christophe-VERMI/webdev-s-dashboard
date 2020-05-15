const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');

class Techno extends sequelize.Model {

  
};

Techno.init({
  name: sequelize.STRING,
  project_id: sequelize.INTEGER,
},{
  sequelize: dbConnection,
  tableName: "technos",
  createdAt: "created_at",
  updatedAt: "updated_at"
});

// on exporte la class directement !
module.exports = Techno;
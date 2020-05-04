const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');

class Tag extends sequelize.Model {

};

Tag.init({
  name: sequelize.STRING,
  status: sequelize.INTEGER
},{
  sequelize: dbConnection,
  tableName: "tags",
  createdAt: "created_at",
  updatedAt: "updated_at"
});

// on exporte la class directement !
module.exports = Tag;
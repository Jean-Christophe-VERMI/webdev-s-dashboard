const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');


class Project extends sequelize.Model {


};

Project.init({
  title: sequelize.STRING,
  description: sequelize.STRING,
  catégorie_type: sequelize.STRING,
  catégorie_état: sequelize.STRING,
  favori: { type: sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  URL_picture_AWS: sequelize.STRING,
  user_id: sequelize.INTEGER,
  date: sequelize.DATE,
},{
  sequelize: dbConnection,
  tableName: "projects",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Project;
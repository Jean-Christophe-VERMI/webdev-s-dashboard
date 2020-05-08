const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');


class Project extends sequelize.Model {


};

Project.init({
  title: sequelize.STRING,
  description: sequelize.STRING,
  app_users_id: sequelize.INTEGER,
  URL_picture_AWS: sequelize.STRING,
},{
  sequelize: dbConnection,
  tableName: "projects",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = Project;
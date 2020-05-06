const emailValidator = require('email-validator');
const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');


class User extends sequelize.Model {

  getEmail() {
    return this.email;
  };

  setEmail(value) {
    // hop, on s'embete pas, on laisse le module faire le travail
    if (!emailValidator.validate(value)) {
      throw Error('User.email must be a valid email');
    } else {
      this.email = value;
    }
  };

  getPassword() {
    return this.password;
  };

  setPassword(value) {
    if (typeof value !== "string") {
      throw Error('User.password must be a string');
    } else {
      this.password = value;
    }
  };

  getFirstName() {
    return this.firstname;
  };

  setFirstName(value) {
    if(typeof value !== "string") {
      throw Error('User.firstname must be a string');
    } else {
      this.firstname = value;
    }
  };

  getLastName() {
    return this.lastname;
  };

  setLastName(value) {
    if (typeof value !== "string") {
      throw Error('User.firstname must be a string');
    } else {
      this.lastname = value;
    }
  };

  /*
  getURL_picture_AWS() {
    return this.URL_picture_AWS;
  };

  setURL_picture_AWS(value) {
    if (typeof value !== "string") {
      throw Error('User.URL_picture_AWS must be a string');
    } else {
      this.URL_picture_AWS = value;
    }
  };
  */
  

  getSecretToken() {
    return this.secretToken;
  };

  setSecretToken(value) {
    if (typeof value !== "string") {
      throw Error('User.secretToken must be a string');
    } else {
      this.secretToken = value;
    }
  };

  getStatus() {
    return this.status;
  };

  setStatus(value) {
    if (!Number.isInteger(value)) {
      throw Error('User.status must be an integer');
    } else {
      this.status = value;
    }
  };

  // petite fonction utilitaire
  getFullName() {
    return this.firstname+' '+this.lastname;
  };

  getActive() {
    return this.active;
  };

  setActive(value) {
    if (!Boolean(value)) {
      throw Error('active is not a valid boolean');
    } else {
      this.status = value;
    }
    
  };

};

User.init({
  email: sequelize.STRING,
  password: sequelize.STRING,
  firstname: sequelize.STRING,
  lastname: sequelize.STRING,
  URL_picture_AWS: sequelize.STRING,
  secretToken: sequelize.STRING,
  active: { type: sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  status: sequelize.INTEGER,
},{
  sequelize: dbConnection,
  tableName: "app_users",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = User;
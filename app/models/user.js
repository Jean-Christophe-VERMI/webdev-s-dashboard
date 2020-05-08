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

  getUsername() {
    return this.username;
  };

  setUsername(value) {
    if(typeof value !== "string") {
      throw Error('User.username must be a string');
    } else {
      this.username = value;
    }
  };

  getGithub() {
    return this.github;
  };

  setGithub(value) {
    if (typeof value !== "string") {
      throw Error('User.github must be a string');
    } else {
      this.github = value;
    }
  };

  getTwitter() {
    return this.twitter;
  };

  setTwitter(value) {
    if (typeof value !== "string") {
      throw Error('User.twitter must be a string');
    } else {
      this.twitter = value;
    }
  };

  getLinkedin() {
    return this.linkedin;
  };

  setLinkedin(value) {
    if (typeof value !== "string") {
      throw Error('User.linkedin must be a string');
    } else {
      this.linkedin = value;
    }
  };

  
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
  username: sequelize.STRING,
  github: sequelize.STRING,
  twitter: sequelize.STRING,
  linkedin: sequelize.STRING,
  URL_picture_AWS: sequelize.STRING,
  secretToken: sequelize.STRING,
  active: { type: sequelize.BOOLEAN, allowNull: false, defaultValue: false },
},{
  sequelize: dbConnection,
  tableName: "users",
  createdAt: "created_at",
  updatedAt: "updated_at"
});


module.exports = User;
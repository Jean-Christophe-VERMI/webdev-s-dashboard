const User = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');

const userController = {

  // route : get /users
  getAllUsers: async (req, res) => {

    try {

      const users = await User.findAll();
      res.json(users);

    } catch (error) {
      res.status(500).json(error);
    }

  },

  // route : post /inscription
  signupAction: async (req, res) => {

    try {

      const {email, password, passwordConfirm, username } = req.body;
      
      const bodyErrors = [];
      if (!email) {
        bodyErrors.push('name parameter is missing');
      }
      if (!password) {
        bodyErrors.push('position parameter is missing');
      }
      if (!passwordConfirm) {
        bodyErrors.push('position parameter is missing');
      }
      if (!username) {
        bodyErrors.push('position parameter is missing');
      }

      if (!emailValidator.validate(email)) {
        return res.status(400).json({
          error: "Cet email n'est pas valide."
        });
      }

      if (password != passwordConfirm) {
        return res.status(400).json({
          error: "La confirmation du mot de passe ne correspond pas."
        });
      }

      const secretToken = randomstring.generate();
      
      if (bodyErrors.length) {
        res.status(400).json(bodyErrors);

      } else {
        const newUser = new User();
        newUser.email = email;
        const encryptedPwd = bcrypt.hashSync(password, 10);
        newUser.password = encryptedPwd;
        newUser.username = username;
        newUser.secretToken = secretToken;

        await newUser.save();
        res.json(newUser);
      }

    } catch (error) {
      res.status(500).json(error);
    }

  },

  // route : post /connexion
  loginAction: async (req, res) => {

    try {

      const {email, password} = req.body;
      
      const user = await User.findOne({
        where: {
          email: email
        }
      });

      if (!user) {
        return res.status(400).json({
          error: "Cet email n'existe pas."
        });

      }

      const validPwd = bcrypt.compareSync(password, user.getPassword() );
      if (!validPwd) {
        return res.status(400).json({
          error: "Le mot de passe ne correspond pas à cet adresse e-mail."
        });
      }

      req.session.user = user;
      delete req.session.user.password;

      return res.status(200).json({
        msg: "Connexion réussie."
      });

    } catch (err) {
      res.status(500).send(err);
    }
    
  },

  // route : PUT /user/:userId/edit-profil
  editProfil: async (req, res) => {

    try {
      const userId = req.params.userId;
      let user = await User.findByPk(userId);
      if (!user) {
          res.status(404).json(`Cant find user with this id : ${userId}`);
      } else {
        const { email, username, github, twitter, linkedin, urlPictureAWS } = req.body;

        if (email) {
          user.email = email;
        }

        if (username) {
          user.username = username;
        }

        if (github) {
          user.github = github;
        }

        if (twitter) {
          user.twitter = twitter;
        }

        if (linkedin) {
          user.linkedin = linkedin;
        }

        if (urlPictureAWS) {
          user.URL_picture_AWS = urlPictureAWS;
        }

        await user.save();
        res.json(user);

      } 
    } catch (err) {
      res.status(500).send(err);
    }  

  },

  // route : PUT /user/:userId/password
  modifyPassword: async (req, res) => {
    try {
      const userId = req.params.userId;
      let user = await User.findByPk(userId);

      if (!user) {
          res.status(404).json(`Cant find user with this id : ${userId}`);
      } else {
        
        const { password, newPassword, confirmedNewPassword } = req.body;

        const validNewPwd = bcrypt.compareSync(password, user.getPassword() );

        if (!validNewPwd) {
          return res.status(400).json({
            error: "Le mot de passe ne correspond pas à ce compte."
          });
        }

        if (newPassword != confirmedNewPassword) {
          return res.status(400).json({
            error: "La confirmation du mot de passe ne correspond pas."
          });
        }

        if (newPassword === confirmedNewPassword) {
          const encryptedNewPwd = bcrypt.hashSync(newPassword, 10);
          user.password = encryptedNewPwd;
        }

        await user.save();
        res.json(user);

      } 

    } catch (err) {
      res.status(500).send(err);
    }  

  },

  // route : DELETE /user/:userId/delete
  deleteAccount: async (req, res) => {

    try {

      const userId = req.params.userId;
      let user = await User.findByPk(userId);
      
      await user.destroy();
      res.status(200).json({msg : 'compte utilisateur supprimé avec succès'});

    } catch (err) {
      res.status(500).send(err);
    }  

  },

};

module.exports = userController;
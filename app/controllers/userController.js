const User = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');

const userController = {

  // route : post /inscription
  signupAction: async (req, res) => {
    try {
      // les vérifs à faire : 

      // - 1: l'utilisateur existe déjà
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      });
      if (user) {
        return res.status(400).json({
          error: "Cet email est déjà utilisé par un utilisateur."
        });
      }    

      // - 2: format d'email valide
      if (!emailValidator.validate(req.body.email)) {
        return res.status(400).json({
          error: "Cet email n'est pas valide."
        });
      }

      // - 3: le mdp et la confirmation ne correspondent pas
      if (req.body.password !== req.body.passwordConfirm) {
        return res.status(400).json({
          error: "La confirmation du mot de passe ne correspond pas."
        });
      }

      /*
      // - 4: generation du secret token...
      const secretToken = randomstring.generate();
      result.value.secretToken = secretToken;

      // -5: Flag account is inactive
      result.value.active = false;
      */

      // Si on est tout bon, on crée le User !
      let newUser = new User();
      newUser.setFirstName(req.body.firstname);
      newUser.setLastName(req.body.lastname);
      newUser.setEmail(req.body.email);
      newUser.setStatus(1);
      const encryptedPwd = bcrypt.hashSync(req.body.password, 10);
      newUser.setPassword(encryptedPwd);

      // on attend que l'utilisateur soit enregistré
      await newUser.save()
      return res.status(200).json({
          msg: "Inscription validée."
      });

    } catch (err) {
      res.status(500).send(err);
    }  

  },

  // route : post /connexion
  loginAction: async (req, res) => {
    try {
      //    console.log(req.body);
      // on tente de récupérer l'utilisateur qui possède l'email donné
      const user = await User.findOne({
        where: {
          email: req.body.email
        }
      });

      if (!user) {
        return res.status(400).json({
          error: "Cet email n'existe pas."
        });

      }

      // Si on a un utilisateur, on teste si le mot de passe est valide
      const validPwd = bcrypt.compareSync(req.body.password, user.getPassword() );
      if (!validPwd) {
        return res.status(400).json({
          error: "Mot de passe non reconnu avec cet adresse e-mail."
        });
      }

      // si tout va bien, on met l'utilisateur en session...
      req.session.user = user;
      //... mais on supprime son mdp !
      delete req.session.user.password;
      // et on repart sur la page d'accueil
      return res.status(200).json({
        msg: "Connexion réussie."
      });

    } catch (err) {
      res.status(500).send(err);
    }
    
  },

  // route : PATCH /user/:id
  editProfil: async (req, res) => {
    try {
      const userId = req.params.id;
      let user = await User.findByPk(userId);
      if (!user) {
          response.status(404).json(`Cant find user with this id : ${userId}`);
      } else {
        const { email, firstname, lastname, } = request.body;

        if (email) {
          user.email = email;
        }

        if (firstname) {
          user.firstname = firstname;
        }

        if (firstname) {
          user.lastname = lastname;
        }

        await user.save();

        res.json(user);

      } 
    } catch (err) {
      res.status(500).send(err);
    }  

  },

  // route : DELETE /user/:id
  deleteProfil: async (req, res) => {
    try {
      const userId = req.params.id;
      let user = await User.findByPk(userId);
      await user.destroy();
      // ici, ça ne sert à rien de renvoyer l'objet, ça serait même contrintuitif vu qu'il n'existe pas dans la BDD
      res.status(200).json('user delete OK');

    } catch (err) {
      res.status(500).send(err);
    }  

  }

  

};

module.exports = userController;
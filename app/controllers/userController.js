const User = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');

const userController = {

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

      // - 4: Si on avait le courage, vérifier que le mdp répond aux recommendations CNIL...

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

  

};

module.exports = userController;
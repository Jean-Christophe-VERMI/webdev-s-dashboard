const User = require('../models/user');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
const randomstring = require('randomstring');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const config = require('../config.json');
const url = require('url');


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

      const matchEmail = await User.findOne({
        where : {
          email: email
        }
      });

      if(matchEmail) {
        return res.status(400).json({error : "Un compte associé à cette adresse email existe déjà."});
      }

      if(!matchEmail) {

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
  
          // envoi email de vérification via nodemailer 
          const msgVerifEmail = `<h3>Bonjour ${username}</h3>
          <br/> 
          <h4>Merci pour votre inscription sur WEBDEV's DASHBOARD !<h4/>
          <br/>
          Vous pouvez maintenant cliquer sur le lien suivant pour vérifier votre e-mail et valider votre inscription. 
          <br/>
          <a href="http://localhost:3000/verification-email?secretToken=${secretToken}">http://localhost:3000/verification-email</a>
          <br/>
          Rappel de votre identifiant de connexion :
          <br/>
          Identifiant : ${email}
          
          A bientôt !
          `;
  
          let transporter = nodemailer.createTransport({
            host: 'smtp.ionos.com',
            port: 465,
            secure: true, // true for 465, false for other ports 587
            auth: {
                user: 'contact@webdevsdashbord.com', // generated ethereal user
                pass: '**********'  // generated ethereal password
            },
            tls:{
            rejectUnauthorized:false
            }
          });
  
          const siteName = 'WEBDEV\'s DASHBOARD';
  
          let mailOptions = {
            from: '"webdev s dashboard contact" <contact@webdevsdashbord.com>', // sender address
            to: `${email}`, // list of receivers
            subject: `${siteName} verification email`, // Subject line
            // text: 'Hello world?', // plain text body
            html: msgVerifEmail // html body
          };
  
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
  
            console.log('Message sent: %s', info.messageId);   
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
            res.status(200).json(newUser);
          });

        }
      
      }

    } catch (error) {
      res.status(500).json(error);
    }

  },


  // ROUTE POST /verification-email
  verifyEmail: async (req, res) => {

    try {

      const clientURL = req.body.clientURL;
      const current_url = new URL(clientURL);
      const search_params = current_url.searchParams;
      const secretToken = search_params.get('secretToken');

      const user = await User.findOne({
        where: {
          secretToken: secretToken
        }
      });

      if (!user) {
        return res.status(404).json({error: 'Erreur de confirmation e-mail. Veuillez réessayer svp.'});
      }

      if (user) {

        user.active = true;
        user.secretToken = '';

        await user.save();
        res.status(200).json({msg: 'Votre email est validé, vous pouvez maintenant vous connecter.'});

      }

    } catch (error) {
      res.status(500).json(error);
    }

  },

  // ROUTE POST /connexion
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
          error: "Aucun compte n'est enregistré avec cette adresse email."
        });

      }

      if(user.active === false) {
        return res.status(400).json({
          error: "Vous n'avez pas validé votre adresse email, connexion refusé. Veuillez consulter votre boite mail à l'adresse que vous avez renseigné lors de votre inscription."
        });
      }

      const validPwd = bcrypt.compareSync(password, user.getPassword() );
      if (!validPwd) {
        return res.status(400).json({
          error: "Le mot de passe ne correspond pas avec cette adresse e-mail."
        });
      }

      // req.session.user = user;
      // delete req.session.user.password;

      // create a jwt token that is valid for 1 days
      const token = jwt.sign({ sub: user.id }, config.secret, { expiresIn: '1d' });
      // console.log(token);
      const userInfos = [{id: user.id, username: user.username, email: user.email}];

      return res.status(200).json({
        userInfos,
        token
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
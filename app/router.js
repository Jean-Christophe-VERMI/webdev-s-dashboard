const express = require('express');

// importer les controllers
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');
const dashbordController = require('./controllers/dashbordController');


const router = express.Router();

// route d'affichage de tous les projets
router.get('/realisations', projectController.allProjects);


// user actions
router.post('/incription', userController.signupAction);
router.post('/connexion', userController.loginAction);
// router.put('/editer-profil', userController.updateAction);
// router.delete('/supprimer-profil', userController.deleteAction);


// gestion des posts du dashbord
router.get('/realisations/dashbord', dashbordController.allProjects);
router.post('/nouveau-projet', dashbordController.newProject);


module.exports = router;
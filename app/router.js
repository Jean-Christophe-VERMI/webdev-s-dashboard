const express = require('express');

// importer les controllers
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');
const dayController = require('./controllers/dayController');
const technoController = require('./controllers/technoController');
const tagController = require('./controllers/tagController');

const router = express.Router();

// route gestion des actions sur table app_users
router.get('/users', userController.getAllUsers);
router.post('/inscription', userController.signupAction);
router.post('/connexion', userController.loginAction);
router.put('/user/:id/edit-profil', userController.editProfil);
router.put('/user/:id/password', userController.modifyPassword);
router.delete('/user/:id', userController.deleteAccount);


// route gestion des actions sur table projects
router.get('/user/:id/projets', projectController.getAllProjectsByUser);
router.get('/user/:id/projets/categorie-type', projectController.getAllProjectsByUserAndCategorieType);
router.get('/user/:id/projets/categorie-etat', projectController.getAllProjectsByUserAndCategorieEtat);
router.get('/projets/:projetId/:projetTitle', projectController.getOneProject);
router.post('/user/:id/projets/nouveau-projet', projectController.createNewProject);
router.post('/projets/:projetId/:projetTitle/editer-etat', projectController.editProjectEtat);
router.put('/user/:id/projets/:projetId', projectController.updateProject);
router.delete('/user/:id/projets/:projetId', projectController.deleteProject);


// route gestion des action sur table days
router.get('/user/:id/projets/:projetId/jours/:dayId', dayController.getOneDay);
router.post('/user/:id/projets/:projetId/jours', dayController.createDay);
router.put('/user/:id/projets/:projetId/jours/:dayId', dayController.updateDay);
router.delete('/user/:id/projets/:projetId/jours/:dayId', dayController.deleteDay);
router.get('/user/:id/:tagName', dayController.getDaysByTags);


/* Technos */
router.get('/technos', technoController.getAllTechnos);
router.post('/user/:id/projets/:projetId/techno', technoController.associateTechnoToProject);
router.put('/user/:id/projets/:projetId/techno/:technoId', technoController.modifyTechno);
router.delete('/user/:id/projets/:projectId/techno/:technoId', technoController.deleteTechnoFromProject);


/* Tags */
router.get('/tags', tagController.getAllTags);
router.post('/user/:id/projets/:projetId/jours/:dayId/tag', tagController.associateTagToDay);
router.put('/user/:id/projets/:projetId/jours/:dayId/tagId', tagController.modifyTag);
router.delete('/user/:id/projets/:projetId/jours/:dayId/tagId', tagController.deleteTagFromDay);


module.exports = router;
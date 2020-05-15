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
router.put('/user/:userId/edit-profil', userController.editProfil);
router.put('/user/:userId/password', userController.modifyPassword);
router.delete('/user/:userId/delete', userController.deleteAccount);


// route gestion des actions sur table projects
router.get('/user/:userId/projets', projectController.getAllProjectsByUser);
router.get('/user/:userId/projets/search', projectController.getAllProjectsByUserAndFilter);
router.get('/projets/:projetId/:projetTitle', projectController.getOneProject);
router.post('/user/:userId/projets/nouveau-projet', projectController.createNewProject);
router.put('/projets/:projetId/:projetTitle/editer', projectController.updateProject);
router.delete('/projets/:projetId/:projetTitle/delete', projectController.deleteProject);


// route gestion des action sur table days
router.get('/projets/:projetId/:projetTitle/jours/:dayId/:dayDate', dayController.getOneDay);
router.post('/projets/:projetId/:projetTitle/nouveau-jour', dayController.createDay);
router.put('/projets/:projetId/:projetTitle/jours/:dayId/:dayDate/editer', dayController.updateDay);
router.delete('/projets/:projetId/:projetTitle/jours/:dayId/delete', dayController.deleteDay);
router.get('liste-jours/:tagName', dayController.getDaysByTags);


/* Technos */
router.get('/technos', technoController.getAllTechnos);
router.post('/projets/:projetId/:projetTitle/ajouter-techno', technoController.addNewTechnoToProject);
router.delete('/projets/:projectId/:projetTitle/techno/:technoId/delete', technoController.deleteTechnoFromProject);


/* Tags */
router.get('/tags', tagController.getAllTags);
router.post('/projets/:projetId/:projetTitle/jours/:dayId/ajouter-tag', tagController.addNewTagToDay);
router.delete('/projets/:projetId/:projetTitle/jours/:dayId/:dayDate/tag/:tagId/delete', tagController.deleteTagFromDay);


module.exports = router;
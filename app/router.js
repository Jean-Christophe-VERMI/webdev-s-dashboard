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
router.get('/user/:id/dashboard/projets', projectController.getAllProjects);
router.get('/user/:id/dashboard/projets/:projetName', projectController.getOneProject);
router.post('/user/:id/dashboard/projets/nouveau-projet', projectController.createProject);
router.put('/:projetName', projectController.updateProject);
router.delete('/:projetName', projectController.deleteProject);


// route gestion des action sur table days
router.get('/user/:id/dashboard/projets/:projetName/:day', dayController.getOneDay);
router.post('/user/:id/dashboard/projets/:projetName', dayController.createDay);
router.put('/:projetName/:day', dayController.updateDay);
router.delete('/:projetName/:day', dayController.deleteDay);


/* Technos */
router.get('/techno', technoController.getAllTechno);
router.post('/techno', technoController.createTechno);
router.patch('/techno/:id', technoController.modifyTechno);
router.delete('/techno/:id', technoController.deleteTechno);
router.post('/:projectName/:id/techno', technoController.associateTechnoToProject);
router.delete('/projets/:projectId/techno/:technoId', technoController.removeTechnoFromProject);


/* Tags */
router.get('/tags', tagController.getAllTags);
router.post('/tags', tagController.createTag);
router.patch('/tags/:id', tagController.modifyTag);
router.delete('/tags/:id', tagController.deleteTag);
router.post('/:day/:id/tags', tagController.associateTagToDay);
router.delete('/cards/:dayId/tags/:tagId', tagController.removeTagFromDay);


module.exports = router;
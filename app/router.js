const express = require('express');

// importer les controllers
const userController = require('./controllers/userController');
const projectController = require('./controllers/projectController');
const dayController = require('./controllers/dayController');
const technoController = require('./controllers/technoController');
const tagController = require('./controllers/tagController');

const router = express.Router();

// route gestion des actions sur table app_users
router.post('/incription', userController.signupAction);
router.post('/connexion', userController.loginAction);
router.put('/user/:id', userController.editProfil);
router.delete('/user/:id', userController.deleteProfil);


// route gestion des actions sur table projects
router.get('/projets', projectController.getAllProjects);
router.get('/projets/:projectName', projectController.getOneProject);
router.post('/nouveau-projet', projectController.createProject);
router.put('/:projectName/:day', projectController.updateProject);
router.delete('/:projectName/:day', projectController.deleteProject);


// route gestion des action sur table days
router.get('/:projectName/:day', dayController.getAllDays);
router.get('/:projectName/:day', dayController.getOneDay);
router.post('/:projectName/:day', dayController.createDay);
router.put('/:projectName/:day', dayController.updateDay);
router.delete('/:projectName/:day', dayController.deleteDay);


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
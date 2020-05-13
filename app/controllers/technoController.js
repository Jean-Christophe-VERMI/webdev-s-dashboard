const { Tag, Project, User, Day } = require('../models/relations');

const technoController = {

  // ROUTE GET /technos
  getAllTechnos: async (req, res) => {
    try {
      const techno = await Techno.findAll();
      res.json(techno);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  // Route POST /user/:id/projets/:projetId/techno
   // TEST CREATE TECHNO + ASSOCIATE PROJECT
  associateTechnoToProject: async (req, res) => {
    try {

      const name = req.body;
      let bodyErrors = [];
      if (!name) {
        bodyErrors.push('Le nom ne peut pas être vide');
      }

      if(bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {
        let newTechno = new Techno();
        newTechno.name = name;
        await newTechno.save();
        console.log(newTechno.id);
      }

      const { userId, projectId } = req.params.id;
      const technoId = newTechno.id;

      let user = await User.findByPk(userId);
      if(!user) {
        res.status(404).json('Can not find user with id '+userId);
      }

      let projet = await Project.findByPk(projectId,{
        include: ['technos']
      });

      if(!projet) {
        res.status(404).json('Can not find project with id '+projectId);
      } else {
        let techno = await Techno.findByPk(technoId);
        if (!techno) {
          res.status(404).json('Can not find techno with id '+technoId);
        } else {

          // on laisse faire la magie de Sequelize !
          await projet.addTechno(techno);
          // malheureusement, les associations de l'instance ne sont pas mises à jour
          // on doit donc refaire un select
          projet = await Project.findByPk(projectId,{
            include: ['technos']
          });
          res.json(project);
        }
      }

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // ROUTE PUT /user/:id/projets/:projetId/techno/:technoId
  modifyTechno: async (req, res) => {
    try {
      const technoId = req.params.id;
      const name = req.body;

      let techno = await Techno.findByPk(technoId);
      if (!techno) {
        res.status(404).json('Can not find techno with id '+technoId);
      } else {
        if (title) {
          techno.name = name;
        }
        await techno.save();
        res.json(techno);
      }

    } catch (error) {
      res.status(500).json(error);
    }
  },

  // ROUTE DELETE /user/:id/projets/:projectId/techno/:technoId
  deleteTechnoFromProject: async (req, res) => {
    try {
      const {projectId, technoId} = req.params;
      let project = await Project.findByPk(projectId);
      if(!project) {
        res.status(404).json('Can not find project with id '+projectId);
      } else {
  
        let techno = await Techno.findByPk(technoId);
        if (!techno) {
          res.status(404).json('Can not find techno with id '+technoId);
        } else {
          await project.removeTechno(techno);
          project = await Project.findByPk(projectId,{
            include: ['technos']
          });
          res.json(project);
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = technoController;
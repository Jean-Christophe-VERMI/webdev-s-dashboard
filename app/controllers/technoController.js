const Techno = require('../models/techno');
const Project = require('../models/project');

const technoController = {

  getAllTechno: async (req, res) => {
    try {
      const techno = await Techno.findAll();
      res.json(techno);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  createTechno: async (req, res) => {
    try {
      const name = req.body;
      if (!name) {
        response.status(400).json({ err: 'name can not be empty'});

      } else {
        let newTechno = new Techno();
        newTechno.name = name;
        await newTechno.save();
        res.json(newTechno);
      }

    } catch (error) {
      res.status(500).json(error);
    }
  },

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

  deleteTechno: async (req, res) => {
    try {
      const technoId = req.params.id;
      let techno = await Techno.findByPk(technoId);
      if (!techno) {
        res.status(404).json('Can not find techno with id '+technoId);
      } else {
        await techno.destroy();
        res.json('OK');
      }
    } catch (error) {
      res.status(500).json(error);
    }
  },

  associateTechnoToProject: async (req, res) => {
    try {
      const projectId = req.params.id;
      const technoId = req.body.tag_id;

      let project = await Project.findByPk(projectId,{
        include: ['technos']
      });
      if(!project) {
        res.status(404).json('Can not find project with id '+projectId);
      } else {
        let techno = await Techno.findByPk(technoId);
        if (!techno) {
          res.status(404).json('Can not find techno with id '+technoId);
        } else {

          // on laisse faire la magie de Sequelize !
          await project.addTechno(techno);
          // malheureusement, les associations de l'instance ne sont pas mises à jour
          // on doit donc refaire un select
          project = await project.findByPk(projectId,{
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

  removeTechnoFromProject: async (req, res) => {
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
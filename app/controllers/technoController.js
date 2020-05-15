const { Techno } = require('../models/relations');

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

  // Route POST /projets/:projetId/:projetTitle/ajouter-techno
  addNewTechnoToProject: async (req, res) => {
    try {

      const name = req.body.name;
      const projetId = req.params.projetId;
      
      if (!name) {
        res.status(400).json({msg : 'Le nom ne peut pas être vide'});
      }

      if (!projetId) {
        res.status(400).json({msg : 'Aucune donné trouvé concernant le projet id'});
      }

      let newTechno = new Techno();
      newTechno.name = name;
      newTechno.project_id = projetId;

      await newTechno.save();
      res.status(200).json(newTechno);

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  

  // ROUTE DELETE /projets/:projectId/:projetTitle/techno/:technoId/delete
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
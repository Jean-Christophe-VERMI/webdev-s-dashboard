const { Project, User, Day, Techno } = require('../models/relations');
const sequelize = require('sequelize');
const Op = sequelize.Op;


const projectController = {

  // Route GET /user/:userId/projets
  getAllProjectsByUser: async (req, res) => {
    
    try {

      const userId = req.params.userId;
      
      let user = await User.findByPk(userId);
      if(!user) {
       res.status(404).json('Can not find user with id '+userId);
       return;
      }

      let projets = await Project.findAll({
        where: {
            user_id: userId
        },
        include: [{
          association: 'technos',
        }]
      });

      if (projets.length === 0) {
        res.status(404).json({error: 'Aucun projet trouvé'});
        return;
      }

      if (projets) {
        res.status(200).json(projets);
        return;
      }

    } catch (error) {
      res.status(500).json(error);
    }

  },

  // Route GET /user/:userId/projets/search
  getAllProjectsByUserAndFilter: async (req, res) => {
    
    try {

      const userId = req.params.userId;
      const { categorieType, categorieEtat } = req.body;

      let projets = await Project.findAll({
        where: {
          user_id: userId,
          [Op.and]: [
            {catégorie_type: categorieType},
            {
              [Op.and]: [
                {catégorie_état: categorieEtat},
              ]
            }
          ]
        }
      });

      if (projets.length === 0) {
        res.status(404).json({msg: 'Aucun projet trouvé'});
      }

      if (projets) {
        res.status(200).json(projets);
      }

    } catch (error) {
      res.status(500).json(error);
    }

  },

  //ROUTE GET /projets/:projetId/:projetTitle
  getOneProject: async (req, res) => {

    try {
      const projetId = req.params.projetId;
      const projetTitle = req.params.projetTitle;

      let projet = await Project.findByPk(projetId, {
        include: [{
          association: 'technos',
        },{
          association: 'days',
          include: [{
            association: 'tags',
          }]
        }]
      });

      if (projetTitle != projet.title) {
        res.status(404).json(`Aucun projet ne correspond à ce titre ${projetTitle}`);
      }

      if (projet) {
        res.json(projet);
      } else {
        res.status(404).json(`Aucun projet ne correspond à cet id ${projetId}`);
      }

    } catch (error) {
      res.status(500).json(error);
    }

  },

  // ROUTE POST /user/:userId/projets/nouveau-projet
  createNewProject: async (req, res) => {

    try {

      const {title, description, catégorie_type } = req.body;
      
      const userId = req.params.userId;
      
      let user = await User.findByPk(userId);
      if(!user) {
       return res.status(404).json('Can not find user with id '+userId);
      }

      let bodyErrors = [];
      if (!title) {
        bodyErrors.push('Le titre ne peut pas être vide');
      }

      if (!description) {
        bodyErrors.push('La description ne peut pas être vide');
      }

      if (!catégorie_type) {
        bodyErrors.push('La catégorie ne peut pas être vide');
      }

      if(bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {

        let newProjet = new Project();
        newProjet.title = title;
        newProjet.description = description;
        newProjet.catégorie_type = catégorie_type;
        newProjet.user_id = userId;

        await newProjet.save();
        res.json(newProjet);
      }

    } catch (error) {
      res.status(500).json(error);
    } 
  },

  // ROUTE PUT /projets/:projetId/:projetTitle/editer
  updateProject: async (req, res) => {

    try {

      const projetId = req.params.projetId;

      let projet = await Project.findByPk(projetId);

      if (!projet) {
        return res.status(404).json(`Aucun projet trouvé avec cet id ${projetId}`);

      } else {

        const { title, description, categorieType, categorieEtat, favori, urlPictureAWS } = req.body

        if (title) {
          projet.title = title;
        }

        if (description) {
          projet.description = description;
        }

        if (categorieType) {
          projet.catégorie_type = categorieType;
        }

        if (categorieEtat) {
          projet.catégorie_état = categorieEtat;
        }

        if (favori) {
          projet.favori = favori;
        }

        if (urlPictureAWS) {
          projet.URL_picture_AWS = urlPictureAWS;
        }
      }

      await projet.save();

      res.json(projet);

    } catch (error) {
      res.status(500).json(error);
    } 
  },

  // ROUTE DELETE /projets/:projetId/:projetTitle/delete
  deleteProject: async (req, res) => {

    try {

      const projetId = req.params.projetId;

      let projet = await Project.findByPk(projetId);
  
      if (!projet) {
        res.status(404).json({msg : `aucun projet trouvé avec cet id ${projetId}`});
      }

      await projet.destroy();
      res.status(200).json({msg : 'projet supprimé avec succès'});

    } catch (error) {
      res.status(500).json(error);
    }
    
  }

};

module.exports = projectController;
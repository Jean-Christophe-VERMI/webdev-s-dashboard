const { Project, User } = require('../models/relations');


const projectController = {

  // Route GET /user/:id/projets
  getAllProjectsByUser: async (req, res) => {
    
    try {

      const userId = req.params.id;
      
      let user = await User.findByPk(userId);
      if(!user) {
        return res.status(404).json('Can not find user with id '+userId);
      }

      let projets = await Project.findAll({
        where: {
            user_id: userId
        },
        // include: ['technos']
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

  // Route GET /user/:id/projets/categorie-type=:value
  getAllProjectsByUserAndCategorieType: async (req, res) => {
    
    try {

      const userId = req.params.id;
      const categorieType = req.body;

      let projets = await Project.findAll({
        where: {
            user_id: userId,
            catégorie_type: categorieType.categorieType
        },
        // include: ['technos']
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

  // Route GET /user/:id/projets/categorie-etat
  getAllProjectsByUserAndCategorieEtat: async (req, res) => {
    
    try {

      const userId = req.params.id;
      const categorieEtat = req.body;


      let projets = await Project.findAll({
        where: {
            user_id: userId,
            catégorie_état: categorieEtat.categorieEtat
        },
        // include: ['technos']
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
        where: {
            id: projetId,
            title: projetTitle
        },
        // include: ['technos']
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

  // ROUTE POST /user/:id/projets/nouveau-projet
  createNewProject: async (req, res) => {

    try {

      // Etape 1 je crée un nouveau projet et je l'enregistre en DBB.
      const {title, description, catégorie_type } = req.body;
      
      const userId = req.params.id;
      
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
        // res.status(200).json(newProjet);
        res.json(newProjet);
      }

    } catch (error) {
      res.status(500).json(error);
    } 
  },

  // ROUTE POST /projets/:projetId/:projetTitle/editer-etat
  editProjectEtat: async (req, res) => {

    try {

      const { projetId, projetTitle } = req.params;

      let projet = await Project.findByPk(projetId, {
        where: {
            id: projetId,
            title: projetTitle
        },
        // include: ['technos']
      });

      if (projetTitle != projet.title) {
        res.status(404).json(`Aucun projet ne correspond à ce titre ${projetTitle}`);
      } else {

        const categorieEtat = req.body;

        if (categorieEtat) {
          projet.catégorie_état = categorieEtat.categorieEtat;
        }
      }

      await projet.save();

      res.json(projet);

    } catch (error) {
      res.status(500).json(error);
    } 
  },

  // ROUTE PUT /user/:id/projets/:projetId
  updateProject: (req, res) => {

    return res.status(200);
  },

  // ROUTE DELETE /user/:id/projets/:projetId
  deleteProject: (req, res) => {

    return res.status(200);
  },


};

module.exports = projectController;
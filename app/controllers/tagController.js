const { Tag } = require('../models/relations');

const tagController = {


  getAllTags: async (req, res) => {

    try {

      const tags = await Tag.findAll();
      res.json(tags);

    } catch (error) {
      res.status(500).json(error);
    }
    
  },

  // ROUTE POST /projets/:projetId/:projetTitle/jours/:dayId/ajouter-tag
  addNewTagToDay: async (req, res) => {

    try {

      const name = req.body.name;
      const dayId = req.params.dayId;
      
      if (!name) {
        res.status(400).json({msg : 'Le nom ne peut pas être vide'});
      }

      if (!dayId) {
        res.status(400).json({msg : 'Aucune donné trouvé concernant le day id'});
      }

      let newTag = new Tag();
      newTag.name = name;
      newTag.day_id = dayId;

      await newTag.save();
      res.status(200).json(newTag);
      
    } catch (error) {
      res.status(500).send(error);
    }

  },

  // ROUTE GET /tags/:dayId
  getAllTagsByDays: async (req, res) => {

    try{

      const dayId = req.params.dayId;

      let tags = await Tag.findAll({
        where: {
          day_id: dayId,
        }
      });

      if (tags.length === 0) {
        return res.status(404).json("aucun tags associé à ce jour");

      } else {
        res.status(200).json(tags);
      }
     
    } catch (error) {
      res.status(500).json(error);
    }

  },

  // ROUTE DELETE /projets/:projetId/:projetTitle/jours/:dayId/:dayDate/tag/:tagId/delete
  deleteTagFromDay: async (req, res) => {

    try {

      const tagId = req.params.tagId;

      let tag = await Tag.findByPk(tagId);

      if(!tag) {
        return res.status(404).json('Can not find tag with id '+tagId);
      }

      await tag.destroy();
      res.status(200).json({msg : 'tag supprimé avec succès du jour'});

    } catch (error) {
      res.status(500).json(error);
    }

  }
  
};

module.exports = tagController;
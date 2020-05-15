const { Tag, Project, User, Day } = require('../models/relations');

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
      const cardId = req.params.id;
      const tagId = req.body.tag_id;

      let day = await Day.findByPk(dayId,{
        include: ['tags']
      });
      if(!day) {
        res.status(404).json('Can not find day with id '+dayId);
      } else {
        let tag = await Tag.findByPk(tagId);
        if (!tag) {
          res.status(404).json('Can not find tag with id '+tagId);
        } else {

          // on laisse faire la magie de Sequelize !
          await day.addTag(tag);
          // malheureusement, les associations de l'instance ne sont pas mises à jour
          // on doit donc refaire un select
          day = await Day.findByPk(dayId,{
            include: ['tags']
          });
          res.json(day);
        }
      }

    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },

  // ROUTE DELETE /projets/:projetId/:projetTitle/jours/:dayId/:dayDate/tag/:tagId/delete
  deleteTagFromDay: async (req, res) => {
    try {
      const {dayId, tagId} = req.params;
      let day = await Day.findByPk(dayId);
      if(!day) {
        res.status(404).json('Can not find card with id '+dayId);
      } else {
  
        let tag = await Tag.findByPk(tagId);
        if (!tag) {
          res.status(404).json('Can not find tag with id '+tagId);
        } else {
          await day.removeTag(tag);
          day = await Day.findByPk(dayId,{
            include: ['tags']
          });
          res.json(day);
        }
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
};

module.exports = tagController;
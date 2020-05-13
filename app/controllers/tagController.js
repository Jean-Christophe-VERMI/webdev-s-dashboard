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

  // ROUTE POST /user/:id/projets/:projetId/jours/:dayId/tag
  // TEST CREATE TAG + ASSOCIATE DAY
  associateTagToDay: async (req, res) => {
    try {
      const name = req.body;
      let bodyErrors = [];
      if (!name) {
        bodyErrors.push('Le nom ne peut pas être vide');
      }

      if(bodyErrors.length) {
        res.status(400).json(bodyErrors);
      } else {
        let newTag = new Tag();
        newTag.name = name;
        await newTag.save();
        console.log(newTag.id);
      }

      const { userId, projetId, dayId } = req.params.id;
      const tagId = newTag.id;

      let user = await User.findByPk(userId);
      if(!user) {
        res.status(404).json('Can not find user with id '+userId);
      }

      let projet = await Project.findByPk(projetId);
      if(!projet) {
        res.status(404).json('Can not find project with id '+projetId);
      }

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
      res.status(500).json(error);
    }
  },

  /*
  // ROUTE POST /user/:id/projets/:projetId/jours/:dayId/tag
  associateTagToDay: async (req, res) => {
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
  */
 
  // ROUTE POST /user/:id/projets/:projetId/jours/:dayId/tag
  modifyTag: async (req, res) => {
    try {
      const tagId = req.params.id;
      const {title, color} = req.body;

      let tag = await Tag.findByPk(tagId);
      if (!tag) {
        res.status(404).json('Can not find tag with id '+tagId);
      } else {
        if (title) {
          tag.title = title;
        }
        if (color) {
          tag.color = color;
        }
        await tag.save();
        res.json(tag);
      }

    } catch (error) {
      res.status(500).json(error);
    }
  },

  // ROUTE DELETE /user/:id/projets/:projetId/jours/:dayId/tagId
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
const { Day, Tag } = require('../models/relations');


const dayController = {

  // ROUTE GET /projets/:projetId/:projetTitle/jours/:dayId
  getOneDay: async (req, res) => {

    try {

      const dayId = req.params.dayId;
      const projetId = req.params.projetId;

      let day = await Day.findByPk(dayId, {
        include: [{
          association: 'tags',
        }]
      });

      if(projetId != day.project_id) {
        return res.status(404).json({msg: `il n'y a pas de jour associé avec ce projet id ${projetId}`})
      }

      if (day) {
        res.json(day);
      } else {
        res.status(404).json(`Aucun jour ne correspond à ce jour id ${dayId}`);
      }

    } catch (error) {
      res.status(500).json(error);
    }

  },

  // ROUTE POST /projets/:projetId/:projetTitle/nouveau-jour
  createDay: async (req, res) => {

    try {

      const projetId = req.params.projetId;
      const date = req.body.date;
      
      let newDay = new Day();
      newDay.project_id = projetId;
      newDay.date = date;
      await newDay.save();

      res.status(200).json(newDay);

    } catch (error) {
      res.status(500).json(error);
    }
    
  },

  // ROUTE PUT /projets/:projetId/:projetTitle/jours/:dayId/editer
  updateDay: async (req, res) => {

    try {

      const dayId = req.params.dayId;
      
      let day = await Day.findByPk(dayId);

      if (!day) {
        res.status(404).json(`Aucun jour ne correspond à cet id ${dayId}`);
      } else {

        const { text, code, refSource } = req.body;

        if (text) {
          day.text = text;
        }

        if (code) {
          day.code = code;
        }

        if (refSource) {
          day.ref_source = refSource;
        }

      }

      await day.save();
      res.json(day);

    } catch (error) {
      res.status(500).json(error);
    }
    
  },

  // ROUTE DELETE /projets/:projetId/:projetTitle/jours/:dayId/delete
  deleteOneDay: async (req, res) => {

    try {

      const dayId = req.params.dayId;

      // Je supprime d'abord les tags associés au jour.
      await Tag.destroy({
        where: {
          day_id: dayId,
        }
      });

      let day = await Day.findByPk(dayId);
  
      if (!day) {
        res.status(404).json({msg : `aucun jour trouvé avec cet id ${dayId}`});
      }

      await day.destroy();
      res.status(200).json({msg : 'jour et tags associés supprimé avec succès du projet'});
      

    } catch (error) {
      res.status(500).json(error);
    }
    
  },

  // ROUTE GET /liste-jours/:tagName
  getDaysByTags: async (req, res) => {

    try {

      const tagName = "#"+req.params.tagName;

      let days = await Day.findAll({
        include: [{
          association: 'tags',
          where: {
            name: tagName,
          }
        }],
      });

      
      if (days.length === 0) {
        res.status(404).json({msg: "Aucun jour trouvé avec ce tag " +tagName});
      } else {
        res.status(200).json(days);
      }
      

    } catch (error) {
      res.status(500).json(error);
    }
    
  }

};

module.exports = dayController;
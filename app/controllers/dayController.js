const { Day, Project } = require('../models/relations');
const sequelize = require('sequelize');
// const moment = require('moment');
const Op = sequelize.Op;


const dayController = {

  // ROUTE GET /projets/:projetId/:projetTitle/jours/:dayId/:dayDate
  getOneDay: async (req, res) => {

    try {

      const dayId = req.params.dayId;
      const projetId = req.params.projetId;

      let day = await Day.findByPk(dayId, {
        where: {
            id: dayId,
        },
        // include: ['tags']
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
      
      let newDay = new Day();
      newDay.project_id = projetId;
      await newDay.save();

      res.status(200).json(newDay);

    } catch (error) {
      res.status(500).json(error);
    }
    
  },

  // ROUTE PUT /projets/:projetId/:projetTitle/jours/:dayId
  updateDay: async (req, res) => {

    try {



    } catch (error) {
      res.status(500).json(error);
    }
    
  },

  // ROUTE DELETE /projets/:projetId/jours/:dayId
  deleteDay: async (req, res) => {

    try {



    } catch (error) {
      res.status(500).json(error);
    }
    
  },

  // ROUTE GET liste-jours/:tagName
  getDaysByTags: async (req, res) => {

    try {



    } catch (error) {
      res.status(500).json(error);
    }
    
  },

};

module.exports = dayController;
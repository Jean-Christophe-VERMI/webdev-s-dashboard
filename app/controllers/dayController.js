const Day = require('../models/day');


const dayController = {

  // ROUTE GET /projets/:projetId/jours/:dayId
  getOneDay: async (req, res) => {

    try {



    } catch (error) {
      res.status(500).json(error);
    }
  },

  // ROUTE POST /projets/:projetId/:projetTitle/nouveau-jour
  createDay: async (req, res) => {

    try {



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
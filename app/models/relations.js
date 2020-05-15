const User = require('./user');
const Project = require('./project');
const Day = require('./day');
const Tag = require('./tag');
const Techno = require('./techno');

// pour éviter la boucle infernale des dépendances, je centralise mes associations ici

// day <> tag

Day.belongsToMany(Tag, {
    as: 'tags',
    through: 'days_have_tags',
    foreignKey: 'days_id',
    otherKey: 'tags_id'
});

Tag.belongsToMany(Day, {
    as: 'days',
    through: 'days_have_tags',
    foreignKey: 'tags_id',
    otherKey: 'days_id'
});

// project <> techno

Project.hasMany(Techno, {
  as: 'technos',
  foreignKey: 'project_id',
});

Techno.belongsTo(Project, {
  as: 'projects',
  foreignKey: 'project_id'
});


// project <> day

Project.hasMany(Day, {
    as: 'days',
    foreignKey: 'project_id',
});

Day.belongsTo(Project, {
    as: 'projects',
    foreignKey: 'project_id'
});

/*
// user <> project


User.belongsToMany(Project, {
  as: 'projects',
  through: 'users_has_projects',
  foreignKey: 'users_id',
  otherKey: 'projects_id'
});

Project.belongsTo(User, {
  as: 'users',
  foreignKey: 'users_id'
});
*/


// ne pas oublier de réexporter les modèles mis à jour, sinon ils seront inaccessibles
module.exports = { Project, Day, Tag, Techno, User, };
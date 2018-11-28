/**
 * Curriculum.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    // Basics
    name: { type: 'string' },
    headline: { type: 'string' },
    // image: { type: 'string' },
    phone: { type: 'string' },
    email: { type: 'string' },
    github: { type: 'string' },
    linkedin: { type: 'string' },
    block: { type: 'boolean', defaultsTo: false },

    work: {
      collection: 'work',
      via: 'curriculum'
    },

    education: {
      collection: 'education',
      via: 'curriculum'
    },

    publications: {
      collection: 'publication',
      via: 'curriculum'
    },

    skillsGroups: {
      collection: 'skillsGroup',
      via: 'curriculum'
    },

    languages: {
      collection: 'language',
      via: 'curriculum'
    },


    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    owner: {
      model: 'user',
    }

  },

};

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

    // Location
    // address: { type: 'string' },
    // postalCode: { type: 'string' },
    // city: { type: 'string' },
    // region: { type: 'string' },
    // countryCode: { type: 'string' },

    // FK profiles

    work: {
      collection: 'work',
      via: 'curriculum'
    },

    // // FK volunteer

    education: {
      collection: 'education',
      via: 'curriculum'
    },

    // FK awards

    publications: {
      collection: 'publication',
      via: 'curriculum'
    },

    skillsGroups: {
      collection: 'skillsGroup',
      via: 'curriculum'
    },

    // FK languages

    // FK interests

    // FK references

    // FK projects

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

/**
 * Language.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // Basics
    name: { type: 'string', required: true },
    proficiency: { type: 'string', required: true },

    curriculum: {
      model: 'curriculum',
    }
  },

};

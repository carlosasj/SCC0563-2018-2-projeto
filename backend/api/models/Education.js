/**
 * Education.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // Basics
    universityName: { type: 'string' },
    course: { type: 'string' },
    from: { type: 'string', allowNull: true },
    until: { type: 'string', allowNull: true },

    curriculum: {
      model: 'curriculum',
    }
  },

};

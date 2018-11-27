/**
 * Publication.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // Basics
    title: { type: 'string', required: true },
    publisher: { type: 'string', allowNull: true },
    date: { type: 'string', allowNull: true },

    curriculum: {
      model: 'curriculum',
    }
  },

};

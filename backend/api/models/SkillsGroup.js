/**
 * SkillsGroup.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    // Basics
    groupTitle: { type: 'string', required: true },
    sk1: { type: 'string', required: true },
    sk2: { type: 'string', allowNull: true },
    sk3: { type: 'string', allowNull: true },
    sk4: { type: 'string', allowNull: true },
    sk5: { type: 'string', allowNull: true },

    curriculum: {
      model: 'curriculum',
    }
  },

};

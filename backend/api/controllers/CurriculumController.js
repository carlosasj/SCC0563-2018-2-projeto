/**
 * CurriculumController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  mineGet: async (req, res) => {
    try{
      console.log('1');

      const curriculum = await Curriculum.findOne({ owner: req.user.id });
      console.log('2');
      console.log(curriculum);

      return res.json(curriculum);
    } catch (err) {
      console.log('3');
      return res.json(null);
    }
  },

  minePost: async (req, res) => {
    let curriculum = await Curriculum.findOne({ owner: req.user.id });
    if (curriculum) {
      curriculum = (await Curriculum.update(curriculum.id).set(req.body).fetch())[0];
    } else {
      curriculum = await Curriculum.create(Object.assign({ owner: req.user.id }, req.body)).fetch();
    }

    return res.json(curriculum);
  }

};

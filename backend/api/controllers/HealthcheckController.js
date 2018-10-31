/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  index: async(req, res) => res.status(200).json({ok: true}),
  protected: async (req, res) => res.status(200).json({ protected: true }),
};

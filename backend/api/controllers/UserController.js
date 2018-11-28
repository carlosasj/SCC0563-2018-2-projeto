/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    setAdmin: async (req, res) => {
        await User.update(req.body.userid).set({ isAdmin: req.body.value });
        try {
            const user = await User.findOne({ id: req.body.userid });
            return res.json(user);
        } catch (err) {
            return res.json(null);
        }
    },

};

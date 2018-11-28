const jwt = require('../services/jwt');

module.exports = async function (req, res, next) {
    if (req.user.isAdmin) {
        next()
    } else {
        return res.status(403).json({ err: 'You are not an Admin' });
    }
};

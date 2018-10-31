const jwt = require('../services/jwt');

module.exports = async function (req, res, next) {
    let token;

    //Check if authorization header is present
    if (req.headers && req.headers.authorization) {
        token = req.headers.authorization;
    } else {
        //authorization header is not present
        return res.status(401).json({ err: 'No Authorization header was found' });
    }

    try {
        const decoded = await jwt.verify(token);
        req.user = decoded.data;
        next()
    } catch (err) {
        console.log(err);

        return res.status(401).json({ err: 'Invalid token' });
    }
};

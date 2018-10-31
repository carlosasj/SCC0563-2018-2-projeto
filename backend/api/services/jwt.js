const jwt = require('jsonwebtoken');

module.exports = {
    sign: function (payload) {
        const result = jwt.sign({
                data: payload
            }, sails.config.secret, { expiresIn: '30d' });
        return result;
    },
    verify: async function (token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, sails.config.secret, (err, decoded) => {
                if (err) { throw err; }
                resolve(decoded);
            });
        })
    }
}

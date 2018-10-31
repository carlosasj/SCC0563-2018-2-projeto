const bcrypt = require('bcrypt');
const jwt = require('../services/jwt');

module.exports = {
    login: async (req, res) => {
        const user = await User.findOne({email: req.body.email});
        if (!user) {
            return res.badRequest({ err: 'Email and password combination do not match' })
        }

        //Compare the password
        const result = await bcrypt.compare(req.body.password, user.password);
        if (result) {
            //password is a match
            return res.json({
                user: user,
                token: jwt.sign(user) //generate the token and send it in the response
            });
        } else {
            //password is not a match
            return res.badRequest({ err: 'Email and password combination do not match' });
        }
    }
}

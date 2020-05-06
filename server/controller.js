const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res, next) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const foundUser = await db.find_user(username);
        if(foundUser.length){
            return res.status(400).send('Username already exists.')
        } else {
            const saltRounds = 12;
            const salt = await bcrypt.genSalt(saltRounds);
            const hashedPassword = await bcrypt.hash(password, salt);
            const [newUser] = await db.create_user([username, hashedPassword]);
            req.session.user = newUser;
            res.status(200).send(req.session.user);
        }
    },
    login: (req, res, next) => {
        const {password} = req.body;
        const db = req.app.get('db');
        db.find_user(username).then(([foundUser]) => {
            if(!foundUser) {
                res.status(400).send('User not found.')
            } else {
                bcrypt.compare(password, foundUser.password).then(isAuthenticated => {
                    if(isAuthenticated){
                        req.session.user = {
                            user_id: foundUser.user_id,
                            username: foundUser.username
                        }
                        res.status(200).send(req.session.user)
                    } else {
                        res.status(400).send(console.log('Incorrect password.'))
                    }
                })
            }
        })
    },
    logout: (req, res, next) => {
        req.session.destroy();
        res.status(200).send('See you later!');
    },
    userSession: (req, res, next) => {
        res.status(200).send(req.session.user);
    }
}
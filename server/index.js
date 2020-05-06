require('dotenv').config();
const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT} = process.env;
const express = require('express');
const app = express();
app.use(express.json());
const massive = require('massive');
const session = require('express-session');

const {register, login, logout, userSession} = require('./controller');

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

massive(CONNECTION_STRING).then(db => {
    console.log('Database connected!');
    app.set('db', db);
}).catch(err => console.log(err));

app.post('/auth/register', register);
app.post('/auth/login', login);
app.delete('/auth/logout', logout);
app.get('/auth/user_session', userSession);

let port = SERVER_PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}.`));
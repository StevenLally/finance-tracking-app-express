const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = express.Router();

usersRouter.use(bodyParser.json());

usersRouter.route('/')
.get((req, res, next) => {
    res.send('ADMIN ONLY: see list of all users');
})
.post((req, res, next) => {
    res.send('not supported, will be used in future /signup and /login routes');
})
.delete((req, res, next) => {
    res.send('ADMIN ONLY: delete user (placeholder, might not use)');
});

module.exports = usersRouter;
const express = require('express');
const bodyParser = require('body-parser');

const detailsRouter = express.Router();

detailsRouter.use(bodyParser.json());

detailsRouter.route('/')
.get((req, res, next) => {
    res.send('show all info for spending and income from all sources');
})
.post((req, res, next) => {
    res.send('add spending/income to tracker');
})
.put((req, res, next) => {
    res.send('update/modify spending/income already on tracker');
})
.delete((req, res, next) => {
    res.send('delete items(s) from tracker');
});

module.exports = detailsRouter;
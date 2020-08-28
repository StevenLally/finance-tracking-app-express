const express = require('express');
const bodyParser = require('body-parser');

const recurringRouter = express.Router();

recurringRouter.use(bodyParser.json());

recurringRouter.route('/')
.get((req, res, next) => {
    res.send('show all recurring spending/income (subscriptions, bills, etc.)');
})
.post((req, res, next) => {
    res.send('add new source of recurring spending/income');
})
.put((req, res, next) => {
    res.send('update/modify source of recurring spending/income');
})
.delete((req, res, next) => {
    res.send('delete source of recurring spending/income');
});

module.exports = recurringRouter;
const express = require('express');
const bodyParser = require('body-parser');

const overviewRouter = express.Router();

overviewRouter.use(bodyParser.json());

overviewRouter.route('/')
.get((req, res, next) => {
  res.send('show high level overview of financial info');
});

module.exports = overviewRouter;
const express = require('express');
const routes = require('./routes/index');

const app = express();

app.use(express.json());

app.use('/accounts', routes.account);

module.exports = app;
const path = require('path');
const express = require('express');
const viewsRouter = require('./routes/viewsRoute');

const app = express();

// view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', viewsRouter);

module.exports = app;

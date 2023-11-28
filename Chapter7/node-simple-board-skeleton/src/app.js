const express = require('express');
const morgan = require('morgan');
const session = require('express-session');

const controller = require('./controller'); //controller/index.js의 router를 가져옴
const { errorHandler } = require('./lib/error-handler');

const { MODE, SESSION_SECRET } = process.env;

const app = express();

app.set('views', `${__dirname}/../views`);
app.set('view engine', 'pug');

app.use('/', express.static(`${__dirname}/../public`));

app.use(morgan(MODE !== 'prod' ? 'dev' : 'combined'));
app.use(express.urlencoded({ extended: true }));

app.use(session({
	secret: SESSION_SECRET,
	resave: false,
	saveUninitialized: true,
}));

app.use(controller); // next가 errorHandler, 순서가 중요함

app.use(errorHandler);

module.exports = app;

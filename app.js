const Config = require('./config/config')
const errorHandler =  require ('./middleware/errorHandler');
const express = require('express');
const expressLayout =  require('express-ejs-layouts');
const blog = require('./routes/blog')
const login = require('./controllers/login')
const signup = require('./routes/signup')

const app = express();

// connect to DB
require('./middleware/db')(Config.DATABASE_CONNECT_STRING)

// parse information from request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/signup', signup);
app.use('/api/login', login);
app.use('/api/blog', blog);

// Use error handler middleware
app.use(errorHandler)


module.exports = app
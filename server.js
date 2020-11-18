// Require Modules
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const port = process.env.PORT || '3000';

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Set up express app
const app = express();

// Connect to the database
require('./config/database');

// Configure the app with app.set()
app.set('view engine', 'ejs');

// Mount middleware with app.use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'gossip',
    resave: false,
    saveUninitialized: false
}));

app.get('/times-visited', function(req, res) {
    if(req.session.visits) {
        req.session.visits++;
    } else {
        req.session.visits = 1;
    } 
    res.send(`<h1>I think you've been here before about ${req.session.visits} time(s)</h1>`)
});
// Mount routes with app.use()
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Tell app to listen
app.listen(port, function() {
     console.log(`Express is listening on port ${port}`);
});
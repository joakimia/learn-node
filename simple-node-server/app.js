const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/users');
const leaderboardRoutes = require('./api/routes/leaderboard');

// Logging
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json);

// Manage CORS
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
});

// Routes
app.use('/users', userRoutes);
app.use('/leaderboard', leaderboardRoutes);

// Error handling
app.use((request, response, next ) => {
    const ERROR_STATUS_CODE = 404;
    const error = new Error("Resource does not exist.");
    
    error.status = ERROR_STATUS_CODE;
    next(error);
})

app.use((error, request, response, next) => {
    const INTERNAL_ERROR_STATUS_CODE = 500;
    
    response.status(error.status || INTERNAL_ERROR_STATUS_CODE)
    response.json({
        error: {
            message: error.message
        }
    });
}); 

module.exports = app;
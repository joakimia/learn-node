const express = require('express');
const app = express();

const userRoutes = require('./api/routes/users');
const leaderboardRoutes = require('./api/routes/leaderboard');

app.use('/users', userRoutes);
app.use('/leaderboard', leaderboardRoutes);

module.exports = app;
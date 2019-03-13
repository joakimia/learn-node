const http = require('http');
const app = require('./app');

const SERVER_PORT = process.env.PORT || 8888;

const server = http.createServer(app).listen(SERVER_PORT);

console.log(`Server is listening, port: ${SERVER_PORT}`);
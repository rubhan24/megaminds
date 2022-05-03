const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());
const usersRoutes = require('./routes/userRoutes')

server.use('/users', usersRoutes);


server.get('/', (req, res) => res.send('Welcome, to the quiz API!'));

module.exports = server;
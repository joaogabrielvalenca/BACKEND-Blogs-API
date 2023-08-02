const express = require('express');
const login = require('./controllers/login');
const { createNewUser, getAllUsers, getUserById } = require('./controllers/user');
const userValidationMiddleware = require('./middlewares/userValidationMiddleware');
const validateToken = require('./middlewares/validateToken');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// app.get('/login', abc);

app.post('/login', login);

app.post('/user', userValidationMiddleware, createNewUser);

app.get('/user', validateToken, getAllUsers); 

app.get('/user/:id', validateToken, getUserById);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

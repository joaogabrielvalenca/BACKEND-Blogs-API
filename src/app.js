const express = require('express');
const login = require('./controllers/login');
const { createNewUser, getAllUsers, getUserById } = require('./controllers/user');
const userValidationMiddleware = require('./middlewares/userValidationMiddleware');
const validateUserToken = require('./middlewares/validateUserToken');
const validateCategoryToken = require('./middlewares/validateCategoryToken');
const { createNewCategory, listCategories } = require('./controllers/category');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

// app.get('/login', abc);

app.post('/login', login);

app.post('/user', userValidationMiddleware, createNewUser);

app.get('/user', validateUserToken, getAllUsers); 

app.get('/user/:id', validateUserToken, getUserById);

app.post('/categories', validateCategoryToken, createNewCategory);

app.get('/categories', validateUserToken, listCategories);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;

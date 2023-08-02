const { User } = require('../models');

const getByEmail = (email) => User.findOne({ where: { email } });

const createUser = ({ displayName, email, password, image }) =>
  User.create({ displayName, email, password, image });

const getUsers = () => User.findAll();

const getById = (id) => User.findByPk(id);

module.exports = {
  getByEmail,
  createUser,
  getUsers,
  getById,
};

// const { DataTypes } = require('sequelize');
// const UsersSchema = require('../models/User');

// const getByEmail = (sequelize, email) => {
//   const User = UsersSchema(sequelize, DataTypes);
//   return User.findOne({ where: { email } });
// };

// module.exports = {
//   getByEmail,
// };
const { UserService } = require('../services');
const { createToken } = require('../auth/authFunctions');
// const userValidationMiddleware = require('../middlewares/userValidationMiddleware');

const generateToken = (user) => {
  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const payload = { data: userWithoutPassword };
  return createToken(payload);
};

const createNewUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    
    const newUser = await UserService.createUser({ displayName, email, password, image });
    const token = generateToken(newUser);
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Internal Server Error', error: err.message });
  }
};

const getAllUsers = async (_req, res) => {
  try {
    const users = await UserService.getUsers();
    if (!users) throw Error;

    const usersWithoutPassword = users.map((user) => {
      const { password, ...userWithoutPassword } = user.toJSON();
      return userWithoutPassword;
    });

    res.status(200).json(usersWithoutPassword);
  } catch (err) {
    res.status(500).json({
      message: 'Erro ao buscar usuários no banco',
      error: err.message,
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserService.getById(id);
    
    if (!user || null) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    const { id: userId, displayName, email, image } = user;
    const userData = { id: userId, displayName, email, image };
    return res.status(200).json(userData);
  } catch (err) {
    return res.status(500).json({
      message: 'Error while fetching user data',
      error: err.message,
    });
  }
};

module.exports = {
  createNewUser,
  getAllUsers,
  getUserById,
};
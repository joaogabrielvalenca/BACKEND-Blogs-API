const { UserService } = require('../services');

const validateDisplayName = (displayName) => displayName.length >= 8;

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => password.length >= 6;

const checkExistingUser = async (email) => {
  const existingUser = await UserService.getByEmail(email);
  return existingUser !== null;
};

const userValidationMiddleware = async (req, res, next) => {
  const { displayName, email, password } = req.body;

  if (!validateDisplayName(displayName)) {
    return res.status(400)
      .json({ message: '"displayName" length must be at least 8 characters long' });
  }

  if (!validateEmail(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  if (!validatePassword(password)) {
    return res.status(400)
      .json({ message: '"password" length must be at least 6 characters long' });
  }

  if (await checkExistingUser(email)) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next(); 
};

module.exports = userValidationMiddleware;
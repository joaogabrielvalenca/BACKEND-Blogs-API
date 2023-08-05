// const jwt = require('jsonwebtoken');
const { getPayload } = require('../auth/authFunctions');

const validateCategoryToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    // const token = authorization.split(' ')[1];
    const token = authorization;
    const payload = getPayload(token);
    if (!payload) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.payload = payload;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'É necessário um token válido para acessar esse endpoint',
    });
  }
};
module.exports = validateCategoryToken;
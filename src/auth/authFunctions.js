const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'secretJWT';
const jwtConfig = {
  algorithm: 'HS256',
  // expiresIn: '15m',
};

const createToken = (payload) => jwt.sign(payload, secret, jwtConfig);

const getPayload = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null; 
  }
};

module.exports = { createToken, getPayload };

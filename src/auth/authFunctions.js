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
    return null; // Retorna null se o token for inválido ou expirado
  }
};

// const createToken = (payload) => {
//   const secretKey = secret; // Substitua 'sua-chave-secreta' pela chave secreta de sua escolha
//   const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Defina o tempo de expiração do token conforme sua necessidade
//   return token;
// };

// const getPayload = (token) => {
//   try {
//     const secretKey = secret; // Substitua 'sua-chave-secreta' pela mesma chave usada para gerar o token
//     const payload = jwt.verify(token, secretKey);
//     return payload;
//   } catch (error) {
//     return null;
//   }
// };

module.exports = { createToken, getPayload };

// module.exports = {
//   // createToken,
//   // generateToken,
//   getPayload,
// };
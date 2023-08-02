// const jwt = require('jsonwebtoken');
const { getPayload } = require('../auth/authFunctions');

// const validateToken = (req, res, next) => {
//   try {
//     const { authorization } = req.headers;
//     if (!authorization) {
//       return res.status(401).json({ message: 'Token not found' });
//     }

//     try {
//       const payload = getPayload(authorization);
//       req.payload = payload;
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: 'Expired or invalid token' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: 'É necessário um token válido para acessar esse endpoint',
//     });
//   }
// };

// const validateToken = (req, res, next) => {
//   try {
//     const { authorization } = req.headers;
//     if (!authorization) {
//       return res.status(401).json({ message: 'Token not found' });
//     }

//     try {
//       const payload = getPayload(authorization); // Supondo que getPayload faz a verificação e decodificação do token
//       req.payload = payload; // Definir req.payload somente quando o token for válido
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: 'Expired or invalid token' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: 'É necessário um token válido para acessar esse endpoint',
//     });
//   }
// };

const validateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const token = authorization.split(' ')[1];
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
module.exports = validateToken;
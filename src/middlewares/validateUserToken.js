const { getPayload } = require('../auth/authFunctions');

const validateUserToken = (req, res, next) => {
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
module.exports = validateUserToken;

// const { getPayload } = require('../auth/authFunctions');

// const validateUserToken = (req, res, next) => {
//   try {
//     const { authorization } = req.headers;

//     if (!authorization) {
//       return res.status(401).json({ message: 'Token not found' });
//     }

//     // Verifica se o token está no formato "Bearer {token}"
//     if (!authorization.startsWith('Bearer ')) {
//       return res.status(401).json({ message: 'Invalid token format' });
//     }

//     const token = authorization.split(' ')[1];
//     const payload = getPayload(token);
    
//     if (!payload) {
//       return res.status(401).json({ message: 'Expired or invalid token' });
//     }
    
//     req.user = payload; // Configura o usuário autenticado no objeto req.user
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({
//       message: 'Error validating user token',
//     });
//   }
// };

// module.exports = validateUserToken;
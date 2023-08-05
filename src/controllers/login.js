const { UserService } = require('../services');
const { createToken } = require('../auth/authFunctions');

function validateFields(email, password) {
  return email && password;
}

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!validateFields(email, password)) {
      return res.status(400).json({ message: 'Some required fields are missing' });
    }

    const userEmail = await UserService.getByEmail(email);

    if (!userEmail || userEmail.password !== password) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    const { password: _password, ...userWithoutPassword } = userEmail.dataValues;

    const payload = { data: userWithoutPassword };

    const token = createToken(payload);

    res.status(200).json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Erro Interno', error: err.message });
  }
};
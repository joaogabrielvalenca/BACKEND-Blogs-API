const { CategoryService } = require('../services');

const createNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({ message: '"name" is required' });
    }

    const newCategory = await CategoryService.createCategory({ name });

    return res.status(201).json(newCategory);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error creating category' });
  }
};

const listCategories = async (req, res) => {
  try {
    // Aqui você pode acessar o req.userId se precisar do ID do usuário a partir do token

    // Chama o serviço para obter todas as categorias
    const categories = await CategoryService.getCategories();

    // Formata a resposta para enviar ao cliente
    const formattedCategories = categories.map((category) => ({
      id: category.id,
      name: category.name,
    }));

    // Retorna a resposta com as categorias encontradas
    return res.status(200).json(formattedCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Internal server error',
    });
  }
};

module.exports = {
  createNewCategory,
  listCategories,
};
const { BlogPost, User, Category } = require('../models');

const getPosts = async () => {
    const posts = await BlogPost.findAll({
      include: [
        {
          model: User,
          as: 'users',
          attributes: ['id', 'displayName', 'email', 'image'],
        },
        {
          model: Category,
          as: 'categories',
          attributes: ['id', 'name'],
          through: { attributes: [] },
        },
      ],
    });

    return posts;
};

module.exports = { getPosts };
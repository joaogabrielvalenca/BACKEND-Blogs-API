const { BlogPostService } = require('../services');

const formatPostData = (post) => ({
  id: post.id,
  title: post.title,
  content: post.content,
  userId: post.userId,
  published: post.published.toISOString(),
  updated: post.updated.toISOString(),
  user: {
    id: post.users.id,
    displayName: post.users.displayName,
    email: post.users.email,
    image: post.users.image,
  },
  categories: post.categories.map((category) => ({
    id: category.id,
    name: category.name,
  })),
});

const listPosts = async (_req, res) => {
  try {
    // Busca todos os blog posts com suas informações usando a função do serviço
    const posts = await BlogPostService.getPosts();

    // Formata os dados antes de enviar a resposta
    const formattedPosts = posts.map(formatPostData);

    return res.status(200).json(formattedPosts);
  } catch (err) {
    return res.status(500).json({ message: 'Internal Error', error: err.message });
  }
};

module.exports = listPosts;
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const BlogPostsSchema = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define(
    'BlogPost',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      user_id: DataTypes.INTEGER,
      published: DataTypes.DATE,
      updated: DataTypes.DATE,
    },
    {
      tableName: 'blog_posts',
      timestamps: true,
    }
  );

  BlogPostsTable.associate = (models) => {
    BlogPostsTable.belongsTo(models.User, {
      foreignKey: { name: 'userId', field: 'user_id' },
      as: 'users',
    });
    BlogPostsTable.belongsToMany(models.Category, {
      through: 'PostCategory',
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'categories',
    });
  };

  return BlogPostsTable;
};

module.exports = BlogPostsSchema;
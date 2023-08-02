// /**
//  * @param {import('sequelize').Sequelize} sequelize
//  * @param {import('sequelize').DataTypes} DataTypes
//  */
// const BlogPostsSchema = (sequelize, DataTypes) => {
//   const BlogPostsTable = sequelize.define(
//     'BlogPosts',
//     {
//       title: DataTypes.STRING,
//       content: DataTypes.TEXT,
//       user_id: DataTypes.INTEGER,
//       published: DataTypes.DATE,
//       updated: DataTypes.DATE,
//     },
//     {
//       tableName: 'blog_posts',
//       timestamps: true,
//       underscored: true,
//     }
//   );

//   BlogPostsTable.associate = (models) => {
//     BlogPostsTable.belongsTo(models.User, {
//       foreignKey: 'user_id',
//       as: 'user',
//     });
//     BlogPostsTable.belongsToMany(models.Category, {
//       through: models.PostsCategories,
//       foreignKey: 'post_id',
//       otherKey: 'category_id',
//       as: 'categories',
//     });
//   };

//   return BlogPostsTable;
// };

// module.exports = BlogPostsSchema;
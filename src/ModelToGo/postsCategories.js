// /**
//  *
//  * @param {import('sequelize').Sequelize} sequelize
//  * @param {import('sequelize').DataTypes} DataTypes
//  */
// // const { BlogPosts } = require('./blogPosts');
// // const { Categories } = require('./categories');

// const PostsCategoriesSchema = (sequelize, DataTypes) => {
//   const PostsCategoriesTable = sequelize.define(
//     'PostsCategories',
//     {
//       post_id: {
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: BlogPosts, // Certifique-se de importar o modelo BlogPosts corretamente
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//       category_id: {
//         primaryKey: true,
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         references: {
//           model: Categories, // Certifique-se de importar o modelo Categories corretamente
//           key: 'id',
//         },
//         onUpdate: 'CASCADE',
//         onDelete: 'CASCADE',
//       },
//     },
//     {
//       timestamps: false,
//       underscored: true,
//       tableName: 'posts_categories',
//     }
//   );

//   PostsCategoriesTable.associate = ({ Categories, BlogPosts }) => {
//     Categories.belongsToMany(BlogPosts, {
//       as: 'blog_posts',
//       through: PostsCategoriesTable,
//       foreignKey: 'category_id',
//       otherKey: 'post_id',
//     });

//     BlogPosts.belongsToMany(Categories, {
//       as: 'categories',
//       through: PostsCategoriesTable,
//       foreignKey: 'post_id',
//       otherKey: 'category_id',
//     });
//   };

//   return PostsCategoriesTable;
// };

// module.exports = PostsCategoriesSchema;
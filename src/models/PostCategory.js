/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */
const PostsCategoriesSchema = (sequelize, DataTypes) => {
  const PostsCategoriesTable = sequelize.define(
    'PostCategory',
    {
      post_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      category_id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'posts_categories',
    }
  );

  PostsCategoriesTable.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostsCategoriesTable,
      foreignKey: 'post_id',
      otherKey: 'category_id',
      as: 'postCategories',
    });

    models.Category.belongsToMany(models.BlogPost, {
      through: PostsCategoriesTable,
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'postCategories',
    });
  };

  return PostsCategoriesTable;
};

module.exports = PostsCategoriesSchema;
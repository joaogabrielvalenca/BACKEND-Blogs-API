/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */
module.exports = (sequelize, DataTypes) => {
  const Categories = sequelize.define(
    'Category',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
    },
    {
      tableName: 'categories',
      underscored: true,
      timestamps: false,
    }
  );

  Categories.associate = (models) => {
    Categories.belongsToMany(models.BlogPost, {
      through: 'PostCategory',
      foreignKey: 'category_id',
      otherKey: 'post_id',
      as: 'blogPosts',
    });
  };

  return Categories;
};
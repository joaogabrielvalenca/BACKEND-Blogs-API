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
  },
);

  // CategoriesTable.associate = (models) => {
  //   CategoriesTable.belongsToMany(models.BlogPosts, {
  //     as: 'blogPosts',
  //     foreignKey: 'category_id',
  //     otherKey: 'post_id',
  //   });
  // };

  return Categories;
};

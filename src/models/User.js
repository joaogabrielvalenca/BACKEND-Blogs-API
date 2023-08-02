/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {*} DataTypes
 * @returns
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
     },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    
    {
      tableName: 'users',
      underscored: true,
      timestamps: false, 
    },
  );
  return User;
};

// const UsersSchema = (sequelize, DataTypes) => {
//   const UsersTable = sequelize.define('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     displayName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     image: DataTypes.STRING,
//   },
//   {
//     tableName: 'users',
//     underscored: true,
//     });
  
//   UsersTable.associate = (models) => {
//     UsersTable.hasMany(models.BlogPost, {
//       as: 'blogPosts',
//       foreignKey: 'display_name',
//     });
//     UsersTable.belongsToMany(models.Category, {
//       through: PostsCategories,
//       foreignKey: 'post_id',
//       otherKey: 'category_id',
//       as: 'categories',
//     });

//   };
//   return UsersTable;
// }

// module.exports = UsersSchema;

// Importe o Sequelize e os DataTypes
// const { Sequelize, DataTypes } = require('sequelize');

// const UsersSchema = (sequelize, DataTypes) => {
//   const UsersTable = sequelize.define('User', {
//     id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     displayName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     image: DataTypes.STRING,
//   },
//   {
//     tableName: 'users',
//     underscored: true,
//   });
  
//   return UsersTable;
// }

// module.exports = UsersSchema;
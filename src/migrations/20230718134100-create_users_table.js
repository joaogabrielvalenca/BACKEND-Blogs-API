'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      display_name: { // Correção: nome do campo alterado de "name" para "display_name"
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: { // Correção: novo campo adicionado
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: { // Correção: novo campo adicionado
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: { // Correção: novo campo adicionado
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      },
      // Outros campos do usuário, se houver...
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
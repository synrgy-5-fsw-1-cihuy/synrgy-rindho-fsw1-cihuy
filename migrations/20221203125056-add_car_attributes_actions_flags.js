'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        'Cars', // table name
        'deletedAt', // new field name
        {
          type: Sequelize.DATE,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Cars', // table name
        'createdBy', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Cars', // table name
        'updatedBy', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'Cars', // table name
        'deletedBy', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('Cars', 'deletedAt'),
      queryInterface.removeColumn('Cars', 'createdBy'),
      queryInterface.removeColumn('Cars', 'updatedBy'),
      queryInterface.removeColumn('Cars', 'deletedBy'),
    ])
  }
};

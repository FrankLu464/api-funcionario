'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("funcionarios", "salario", {
      type:Sequelize.DECIMAL(10,2),
      allownull:false,
      defaultValue:0.00
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("Funcionarios", "salario")
  }
};

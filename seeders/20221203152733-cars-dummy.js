'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Cars', [
      {
        plate: "KT 1377 BV",
        manufacture: "Toyota",
        model: "Avanza",
        image: "https://res.cloudinary.com/daq5yihdj/image/upload/v1669363048/cars/wqybtmnmqvns0quecip0.jpg",
        rentPerDay: 150000,
        capacity: 6,
        description: "This is an Avanza car!",
        availableAt: new Date(),
        transmission: "Manual",
        available: "true",
        type: "Minivan",
        year: "2019",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        plate: "KT 7856 NZ",
        manufacture: "Daihatsu",
        model: "Innova",
        image: "https://res.cloudinary.com/daq5yihdj/image/upload/v1669207992/cars/itlcqvrno7tmxjv0e98y.jpg",
        rentPerDay: 400000,
        capacity: 4,
        description: "This is an Innova car!",
        availableAt: new Date(),
        transmission: "Automatic",
        available: "false",
        type: "Minivan",
        year: "2021",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Cars', null, {});
  }
};

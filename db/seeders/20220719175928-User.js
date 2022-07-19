module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        nickname: 'admin',
        email: 'admin@mail.ru',
        password: 'admin',
        role_id: 1,
      },
      {
        nickname: 'tealover',
        email: 'tealover@mail.ru',
        password: '123',
        role_id: 2,
      },
      {
        nickname: 'teaheater',
        email: 'teaheater@mail.ru',
        password: '123',
        role_id: 2,
      },
      {
        nickname: 'nyash_myash',
        email: 'nyash_myash@mail.ru',
        password: '123',
        role_id: 2,
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};

'use strict';

var books = [
  { name: "Name of the Wind", genre: "Fantasy", authorId: '1' },
  { name: "The Final Empire", genre: "Fantasy", authorId: '2' },
  { name: "The Long Earth", genre: "Sci-Fi", authorId: '3' },
  { name: "The Long Earth", genre: "Fantasy", authorId: '2' },
  { name: "The Colour of Magic", genre: "Fantasy", authorId: '3' },
  { name: "The Light Fantastic", genre: "Fantasy", authorId: '3' },
]

var authors = [
  { name: 'Patrick Rothfuss', age: 44 },
  { name: 'Brandon Sanderson', age: 42 },
  { name: 'Terry Pratchett', age: 66 }

]

function addDates(array) {
  for (const item of array) {
    item.createdAt = new Date();
    item.updatedAt = new Date();
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    addDates(authors);
    addDates(books);
    await queryInterface.bulkInsert('authors', authors, {});
    return await queryInterface.bulkInsert('books', books, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};

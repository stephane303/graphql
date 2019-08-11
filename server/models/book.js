'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    genre: DataTypes.STRING,
    authorId: DataTypes.INTEGER,
  }, {});
  Book.associate = function(models) {
    models.Book.belongsTo(models.Author, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Book;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define('Author', {
    name: DataTypes.STRING,
    age: DataTypes.STRING
  }, {});
  Author.associate = function(models) {
      models.Author.hasMany(models.Book);
  };
  return Author;
};
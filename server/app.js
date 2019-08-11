const express= require('express');
const graphqlHTTP = require('express-graphql');
const schema= require('./schema/schema');
const Sequelize = require('sequelize');
const models = require('./models');

const sequelize = new Sequelize('lib', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    dialectOptions: {
        timezone: 'Etc/GMT+2',
      },
  });


const app = express();



app.use('/graphql',graphqlHTTP(
    {
        schema,
        graphiql:true,
    }
));

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
models.Author.create({
    name:'test',
    age: 25
}).then( author => {
    book = models.Book.create(
        {
            name: 'Title',
            genre: 'Sci-fi',
        }    
    );
    console.log(author.toJSON());
    author.addBook(book).then(console.log('book added'));    
});

models.Book.create({
    name:'test303',
    genre: 'sci-fi',
    authorId: 1,
});
    

app.listen(4000,(
    function() {
        console.log('now listing ...')
    }
))

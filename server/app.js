const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
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




app.use('/graphql', graphqlHTTP(
  {
    schema,
    graphiql: true,
  }
));





app.listen(4000, (
  function () {
    console.log('now listing ...')
  }
))

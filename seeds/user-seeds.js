const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'BrandonK',
    email: 'BrandonK@gmail.com',
    password: 'BigBoi123'
  },
  {
    username: 'Scharf',
    email: 'Scharf@gmail.com',
    password: 'BigBoi123'
  },
  {
    username: 'Evanson',
    email: 'Evanson@gmail.com',
    password: 'BigBoi123'
  },
  {
    username: 'Mause',
    email: 'Masue@gmail.com',
    password: 'BigBoi123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
const { v4 } =  require('uuid');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const hashPW = bcrypt.hashSync('test321', salt);

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { 
          id: v4(),
          fullname: 'Admin',
          email: 'admin@gmail.com',
          role: "admin",
          password: "123456"
        },
        { 
          id: v4(),
          fullname: 'Chad',
          email: 'chad@gmail.com',
          role: "admin",
          password: "123456"
        },
        
      ]).then(() => console.log('User successfully added!'))
      .catch(error => console.log(`Error adding user: ${error}`))
    })
    .catch(error => console.log(`Error seeding data: ${error}`));
};
const { numbers } = require('./data.js');
// importing array numbers from data.js
const { pessoas } = require('./data.js');
// importing array pessoas from data.js

const numberFiltered = numbers.filter((number) => {
  // the filter method loop in each number of array and
  // compare each one if number is < 5 they return the number
  return number < 5;
});
// filtering array numbers for search for number < 5

console.log(numberFiltered);
// showing numbers filtered

const name = pessoas.filter((pessoa) => pessoa.name === 'Carlos');

name.length > 0 ? console.log(name) : console.log('O nome não existe');

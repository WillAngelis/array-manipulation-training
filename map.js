const { numbers } = require('./data.js');
// importing array numbers from data.js
const { pessoas } = require('./data.js');
// importing array pessoas from data.js

doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

changeNames = pessoas.map((pessoa) => {
  return (pessoa.name = `Ola ${pessoa.name}`);
});

console.log(changeNames);

const { numbers } = require('./data.js');
// importing array numbers from data.js

totalNumbers = numbers.reduce((ac, number) => {
  return ac + number;
}, 0);

console.log(totalNumbers);

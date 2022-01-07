const fs = require('fs');

fs.readFile('h0503_luvut.txt', (error, data) => {
  if (error) {
    console.error(error);
    return;
  }
  let numerot = data.toString().split(',');

  let summa = numerot.reduce(function (a, b) {
    return Number(a) + Number(b);
  });

  console.log(`Sum is ${summa}`);
});

console.log('Reading file and calculate a sum...');

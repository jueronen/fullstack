console.log(process.argv);

const fs = require('fs');
const path = require('path');

if (
  process.argv.length <= 3 ||
  isNaN(process.argv[2]) ||
  isNaN(process.argv[3]) ||
  isNaN(process.argv[4])
) {
  console.log(
    `Usage: ${path.basename(
      __filename
    )} RANDOMIZED_NUMBERS_COUNT MIN_VALUE MAX_VALUE`
  );
  process.exit(-1);
}

const arvottavat = process.argv[2];
const min = process.argv[3];
const max = process.argv[4];
let luvut = Array.from(
  { length: arvottavat },
  () =>
    Math.floor(Math.random() * (parseInt(max) + 1 - parseInt(min))) +
    parseInt(min)
);

console.log(`Arvotut luvut: ${luvut}.`);

const tiedot = require('./h0502_user');

console.log(
  `Nimeni on ${tiedot.getName()}, tämänhetkinen asuinpaikka on ${tiedot.getLocation()}, syntynyt olen ${
    tiedot.dateOfBirth
  } Toivakassa.`
);

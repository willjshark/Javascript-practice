const readlineSync = require("readline-sync");
const Thermostat = require("./thermostat");

let thermostat = new Thermostat();
console.log(`Temperature is ${thermostat.getTemperature()}`);

while (true) {
  let command = readlineSync.question("Enter command > ");
  let result = `Temperature is ${thermostat.getTemperature()}`;

  if (command === "up") {
    thermostat.up();
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  } else if (command === "down") {
    thermostat.down();
    console.log(`Temperature is ${thermostat.getTemperature()}`);
  }
}

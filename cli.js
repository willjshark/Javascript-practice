const readlineSync = require("readline-sync");
const Thermostat = require("./thermostat");

let thermostat = new Thermostat();
console.log(`Temperature is ${thermostat.getTemperature()}`);

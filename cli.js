let readlineSync = require('readline-sync');
const Thermostat = require('./thermostat');

let command;
const thermo = new Thermostat;

while(command !== 'stop') {
command = readlineSync.question('Enter your command. ');
thermo.commandReader(command, thermo);
console.log(thermo.getTemperature());
};
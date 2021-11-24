const { toThrowErrorMatchingSnapshot } = require("jest-snapshot");

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum = 10;
    this.maximum = 25;
  }

  getTemperature = () => this.temperature;

  setPowerSavingMode = (onOrOff) => {
    if (onOrOff) {
      this.maximum = 25;
    } else {
      this.maximum = 32;
    }
  };

  up = () => {
    if (this.temperature === this.maximum) {
      return;
    }
    this.temperature += 1;
  };

  down = () => {
    if (this.temperature === this.minimum) {
      return;
    }
    this.temperature -= 1;
  };

  reset = () => (this.temperature = 20);
}

module.exports = Thermostat;

class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum = 10;
    this.maximum = 25;
  }

  getTemperature = () =>
    this.temperature === this.maximum
      ? `${this.temperature} (maximum reached)`
      : this.temperature;

  setPowerSavingMode = (onOrOff) =>
    onOrOff ? (this.maximum = 25) : (this.maximum = 32);

  up = () => {
    this.temperature === this.maximum
      ? this.temperature
      : (this.temperature += 1);
  };

  down = () => {
    this.temperature === this.minimum
      ? this.temperature
      : (this.temperature -= 1);
  };

  reset = () => (this.temperature = 20);

  energyUsage = () => {
    if (this.temperature < 18) {
      return "low-usage";
    } else if (this.temperature >= 18 && this.temperature <= 25) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  };
    commandReader = (command,thermo) => {
      if(command === 'up'){
        return thermo.up();
      }else if (command === 'down') {
        return thermo.down();
      }else if (command === 'psm on') {
        thermo.setPowerSavingMode(true);
        console.log('Power saving is now on');
      }else if (command === 'psm off') {
        thermo.setPowerSavingMode(false);
        console.log('Power saving is now off');
      }
    };
    
  
}



module.exports = Thermostat;

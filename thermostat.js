class Thermostat {
  constructor() {
    this.temperature = 20;
    this.minimum = 10;
  }

  getTemperature = () => this.temperature;

  up = () => this.temperature += 1;

  down = () =>{ 
    if(this.temperature === this.minimum) { 
     return;
    }
    this.temperature -= 1;
    }  

  

}

module.exports = Thermostat;

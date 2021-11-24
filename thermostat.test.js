const { expect } = require("@jest/globals");
const Thermostat = require("./thermostat");



describe("Thermostat", () => {

  it("has a starting temperature of 20", () => {
    let thermostat = new Thermostat();
    expect(thermostat.temperature).toBe(20);
  });

  it("can get a temperature", () => {
    let thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toBe(20);
  });

  it('can increase tempreture by 1', () => {
    let thermostat = new Thermostat();
    expect(thermostat.up()).toBe(21);
  });

  it('can decrease tempreture by 1', () => {
    let thermostat = new Thermostat();
    thermostat.down()
    expect(thermostat.getTemperature()).toBe(19);
  });
 
  it('can not decrease tempreture below minimum tempreture', () => {
    let thermostat = new Thermostat();
   for(let i = 0; i < 11; i++) {
   thermostat.down();
   }

   expect(thermostat.getTemperature()).toBe(10);
  })


});

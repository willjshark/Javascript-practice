const { expect, it } = require("@jest/globals");
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

  it("can increase tempreture by 1", () => {
    let thermostat = new Thermostat();
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("can decrease tempreture by 1", () => {
    let thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("can not decrease tempreture below minimum tempreture", () => {
    let thermostat = new Thermostat();
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }

    expect(thermostat.getTemperature()).toBe(10);
  });

  it("starts with power saving mode on", () => {
    let thermostat = new Thermostat();
    expect(thermostat.maximum).toBe(25);
  });

  it("will change maximum temperature to 32", () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    expect(thermostat.maximum).toBe(32);
  });

  it("can not increase tempreture more than maximum tempreture", () => {
    let thermostat = new Thermostat();
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("can not increase tempreture more than maximum tempreture", () => {
    let thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });
});

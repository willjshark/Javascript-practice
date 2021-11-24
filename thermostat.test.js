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
});

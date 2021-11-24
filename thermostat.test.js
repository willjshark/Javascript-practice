const Thermostat = require("./thermostat");

describe("Thermostat", () => {
  let thermostat;

  beforeEach(() => {
    thermostat = new Thermostat();
  });

  it("can get a temperature", () => {
    expect(thermostat.getTemperature()).toBe(20);
  });

  it("can increase temperature by 1", () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toBe(21);
  });

  it("can decrease temperature by 1", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toBe(19);
  });

  it("can not decrease temperature below minimum temperature", () => {
    for (let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toBe(10);
  });

  it("starts with power saving mode on", () => {
    expect(thermostat.maximum).toBe(25);
  });

  it("will change maximum temperature to 32", () => {
    thermostat.setPowerSavingMode(false);
    expect(thermostat.maximum).toBe(32);
  });

  it("can not increase temperature more than maximum temperature when power saving mode is on", () => {
    for (let i = 0; i < 6; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(25);
  });

  it("can not increase temperature more than maximum temperature when power saving mode is off", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toBe(32);
  });

  it("resets the temperature back to 20", () => {
    for (let i = 0; i < 3; i++) {
      thermostat.up();
    }
    expect(thermostat.reset()).toBe(20);
  });

  it("has low energy usage", () => {
    for (let i = 0; i < 3; i++) {
      thermostat.down();
    }
    expect(thermostat.energyUsage()).toBe("low-usage");
  });

  it("has medium energy usage", () => {
    for (let i = 0; i < 3; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toBe("medium-usage");
  });

  it("has high energy usage", () => {
    thermostat.setPowerSavingMode(false);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toBe("high-usage");
  });
});

const { sequelize } = require("./db");
const { Band, Musician } = require("./index");

describe("Band and Musician Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Band", async () => {
    // TODO - test creating a band
    const themCrookedVultures = await Band.create({
      name: "Them Crooked Vultures",
      genre: "Hard Rock",
    });
    expect(themCrookedVultures.name).toBe("Them Crooked Vultures");
    expect(themCrookedVultures.genre).toBe("Hard Rock");
  });

  test("can create a Musician", async () => {
    // TODO - test creating a musician
    const johnHomme = await Musician.create({
      name: "John Homme",
      instrument: "Guitar",
    });
    expect(johnHomme.name).toBe("John Homme");
    expect(johnHomme.instrument).toBe("Guitar");
  });
});

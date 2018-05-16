
describe("Plane", function() {
  var plane;



  beforeEach(function() {
    plane = new Plane();
    const LANDED = 'landed';
    const FLYING = 'flying';
  });

  it("has a flying status", function() {
    expect(plane.status).toEqual(FLYING);
  });

  it("has a landed status after landing", function() {
    plane.land();

    expect(plane.status).toEqual(LANDED);
  });

  it("has a flying status after take off", function() {
    plane.fly();
    expect(plane.status).toEqual(FLYING);
  });
});

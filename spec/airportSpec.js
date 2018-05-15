describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should return an empty array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should return default capacity of 10", function() {
    expect(airport.capacity).toEqual(10);
  });

  describe("land", function() {
    var plane;

    beforeEach(function() {
      plane = new Plane();
    });

    it('should add a plane to the airport', function() {
      airport.landPlane(plane);
      expect(airport.planes).toEqual([plane]);
    });
  });
});

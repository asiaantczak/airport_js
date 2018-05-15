describe("Airport", function() {
  var airport;

  beforeEach(function() {
    airport = new Airport();
  });

  it("should return an empty array", function() {
    expect(airport.planes).toEqual([]);
  });
});

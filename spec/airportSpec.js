describe("Airport", function() {
  var airport;
  var plane;
  var plane2;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpyObj('plane', ['land', 'fly']);
    plane2 = jasmine.createSpyObj('plane2', ['land', 'fly']);
  });

  it("should return an empty array", function() {
    expect(airport.planes).toEqual([]);
  });

  it("should return default capacity of 10", function() {
    expect(airport.capacity).toEqual(10);
  });

  describe("landPlane", function() {

    it('should add a plane to the airport', function() {
      airport.landPlane(plane);
      expect(airport.planes).toEqual([plane]);
    });

    it('has got a landed plane', function() {
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });
  });

  describe("takeOff", function() {
    it('should remove the plane from the airport', function() {
      airport.landPlane(plane);
      airport.landPlane(plane2);
      airport.takeOff(plane);
      expect(airport.planes).toEqual([plane2]);
    });

    it('plane is flying after taking off', function() {
      airport.landPlane(plane);
      airport.takeOff(plane);
      expect(plane.fly).toHaveBeenCalled();
    });
  });
});

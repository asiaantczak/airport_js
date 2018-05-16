describe("Airport", function() {
  var airport;
  var plane;
  var plane2;
  var weather;

  debugger;

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
    beforeEach(function() {
    var weather2 = {
      generate: function() {}
    }
  });
    spyOn(weather2,'generate').and.returnValue('stormy');

    it('should add a plane to the airport', function() {
      airport.landPlane(plane);
      expect(airport.planes).toEqual([plane]);
    });

    it('has got a landed plane', function() {
      airport.landPlane(plane);
      expect(plane.land).toHaveBeenCalled();
    });

    it('cannot land a plane if airport is full', function() {
      for (var i = 0; i < 10; i ++) {
        airport.landPlane(plane);
      };
      expect(function () { airport.landPlane(plane) }).toThrow('Airport is full!');
    });

    it('cannot land a plane if weather is stormy', function (){
      spyOn(weather2, 'generate').and.returnValue('stormy');
      airport.checkWeather(weather2);
      expect(function () {airport.landPlane(plane, weather2) }).toThrow('Plane cannot land, bad weather');
    })
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

    it('raises error if airport is empty', function () {
      airport.planes.length = 0
      expect(function() { airport.takeOff(plane) }).toThrow('There are not planes at the airport')
    });
  });

  describe("checkWeather", function() {
    beforeEach(function() {
    weather = {
      generate: function() {}
    }
  });
    it('should check the weather', function() {
      spyOn(weather,'generate').and.returnValue('stormy');
      airport.checkWeather(weather);
      expect(weather.generate).toHaveBeenCalled();
    });
  });
});

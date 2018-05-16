const defaultCapacity = 10;

function Airport(capacity = defaultCapacity) {
  this.planes = []
  this.capacity = capacity
};

Airport.prototype.landPlane = function(plane) {
  if (this.planes.length === this.capacity) {
    throw "Airport is full!";
  } else {
    this.planes.push(plane);
    plane.land();
  };
};

Airport.prototype.takeOff = function(plane) {
  if (this.planes.length === 0) {
    throw 'There are not planes at the airport'
  } else {
    index = this.planes.indexOf(plane)
    this.planes.splice(index, 1);
    plane.fly();
  }
};

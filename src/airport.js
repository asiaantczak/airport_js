const defaultCapacity = 10;

function Airport(capacity = defaultCapacity) {
  this.planes = []
  this.capacity = capacity
};

Airport.prototype.landPlane = function(plane) {
  this.planes.push(plane);
};

Airport.prototype.takeOff = function(plane) {
  index = this.planes.indexOf(plane)
  this.planes.splice(index, 1);
};

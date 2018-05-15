const defaultCapacity = 10;

function Airport(capacity = defaultCapacity) {
  this.planes = []
  this.capacity = capacity
};

Airport.prototype.land = function(plane) {
  this.planes.push(plane);
};

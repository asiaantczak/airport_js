function Plane() {
  this.status = 'flying';
};

Plane.prototype.land = function() {
  this.status = 'landed';
};

Plane.prototype.fly = function() {
  this.status = 'flying';
};

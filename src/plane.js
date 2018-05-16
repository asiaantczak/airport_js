const LANDED = 'landed';
const FLYING = 'flying';

function Plane() {
  this.status = FLYING;
};

Plane.prototype.land = function() {
  this.status = LANDED;
};

Plane.prototype.fly = function() {
  this.status = FLYING;
};

const outlook = ["stormy", "sunny", "sunny", "sunny", "sunny"]
function Weather() {
  this.status = "undefined"
};

Weather.prototype.generate = function(){
  this.status = outlook[Math.floor(Math.random()*outlook.length)];
};

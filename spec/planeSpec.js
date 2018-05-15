describe("Plane", function() { 
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  it("has a flying status", function() {
    expect(plane.status).toEqual('flying');
  });
});

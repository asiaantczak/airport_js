describe("Weather", function() {
var weather;

beforeEach(function(){
  weather = new Weather();
});

  it("should return a random weather state when generated", function() {
    weather.generate();
    expect(weather.status === "sunny" || weather.status === "stormy").toBe(true);
  });
});

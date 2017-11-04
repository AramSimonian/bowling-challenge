describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();

  });

  it("should have frames collection of ten items", function() {
    expect(game.frames.length).toEqual(10);
  });

  it("should have a first frame that has no previous frame", function() {
    expect(game.frames[0].previous).toEqual(null);
  });

  it("should have a first frame that has second frame as next", function() {
    expect(game.frames[0].next).toEqual(game.frames[1]);
  });

  it("should have a second frame that has first frame as previous", function() {
    expect(game.frames[1].previous).toEqual(game.frames[0]);
  });

  it("should have a second frame that has third frame as next", function() {
    expect(game.frames[1].next).toEqual(game.frames[2]);
  });

  it("should have a last frame that has no next frame", function() {
    expect(game.frames[game.frames.length-1].next).toEqual(null);
  });

});
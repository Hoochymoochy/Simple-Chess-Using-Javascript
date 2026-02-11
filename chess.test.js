const chess960 = require("./chess960Text");

describe("chess960()", () => {
    const generate = () => chess960();
  
    test("board has 64 squares", () => {
      const board = generate();
      expect(board.length).toBe(64);
    });
  
  });
  
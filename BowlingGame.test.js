const Game = require("./BowlingGame");
let g;
beforeEach(() => {
  g = new Game();
});

const rollSpare = () => {
  g.roll(5);
  g.roll(5);
};

const rollMany = (n, pins) => {
  for (let i = 0; i < n; i++) {
    g.roll(pins);
  }
};

test("Can create game", () => {
  expect(g).toBeInstanceOf(Game);
});

test("Can roll", () => {
  g.roll(0);
});

test("Gutter game", () => {
  rollMany(20, 0);
  expect(g.score()).toBe(0);
});

test("All Ones", () => {
  rollMany(20, 1);
  expect(g.score()).toBe(20);
});

test("One Spare", () => {
  rollSpare();
  g.roll(3);
  rollMany(17, 0);
  expect(g.score()).toBe(16);
});

test("Strike", () => {
  rollStrike();
  g.roll(3);
  g.roll(4);
  rollMany(16, 0);
  expect(g.score()).toBe(24);
});

function rollStrike() {
  g.roll(10);
}

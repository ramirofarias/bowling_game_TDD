class Game {
  constructor() {
    this.rolls = [21];
    this.currentRoll = 0;
  }
  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }
  score() {
    let totalScore = 0;
    let frameIndex = 0;
    const isSpare = (index) => this.rolls[index] + this.rolls[index + 1] === 10;
    const isStrike = (index) => this.rolls[index] === 10;

    for (let frame = 0; frame < 10; frame++) {
      if (isStrike(frameIndex)) {
        totalScore +=
          10 + this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
        frameIndex++;
      } else if (isSpare(frameIndex)) {
        totalScore += 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        totalScore += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return totalScore;
  }
}

module.exports = Game;

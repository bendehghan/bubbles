class Score {
  s = 0;
  winScore = 300;

  constructor(win){
    this.winScore = win;
  }

  show() {
    fill(0);
    textSize(50);
    textAlign(RIGHT);

    text(this.s, width - 10, 50);
  }

  reset() {
    this.s = 0;
  }

  isWin() {
    if (this.s >= this.winScore) {
      return true;
    } else {
      return false;
    }
  }

  increase(by) {
    this.s += by;
  }

}

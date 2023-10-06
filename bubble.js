class Bubble {
  isKilled = 0;
  // moveAngle = random(0, 2 * PI);
  // moveSpeed = random(5);
  // score = 0;

  constructor(level, size, x, y) {
    this.level = level;
    this.size = size;

    this.moveAngle = random(0, 2 * PI);
    this.moveSpeed = random(this.level);
    this.score = 0;

    this.score = this.size;

    //location
    this.x = x;
    this.y = y;

    this.xSpeed = this.moveSpeed * cos(this.moveAngle);
    this.ySpeed = this.moveSpeed * sin(this.moveAngle);
  }

  show() {
    fill(0, 0, 255, 200);
    noStroke();
    circle(this.x, this.y, this.size);
    // fill(255);
    // textSize(10);
    // text(this.score, this.x - 6, this.y + 4);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;

    // console.log(this.moveAngle , xp, yp);
  }

  split() {
    let half1 = new Bubble(
      this.level,
      floor(this.size / 2),
      this.x,// - this.size / 2,
      this.y
    );
    let half2 = new Bubble(
      this.level,
      floor(this.size / 2),
      this.x,// - this.size / 2,
      this.y
    );

    return [half1, half2];
  }

  edge() {
    if (this.x > width || this.x < 0) {
      this.xSpeed = this.xSpeed * -1;
    }
    if (this.y > height || this.y < 0) {
      this.ySpeed = this.ySpeed * -1;
    }
  }

  //   shake(x) {
  //     this.x += round(random(2)) * (random() < 0.5 ? -1 : 1);
  //     this.y += round(random(2)) * (random() < 0.5 ? -1 : 1);
  //   }

  kill() {
    this.isKilled = 1;
  }
}

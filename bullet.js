class Bullet {
  // angle = 30 * PI/180 ;

  constructor(x, speed, angle, grouping) {
    this.markForDelete = 0;
    this.isHit = 0;
    this.isMiss = 0;
    this.speed = speed;

    this.size = 10;
    this.x = x;
    this.angle = angle;
    this.y = height;
    this.grouping = grouping;
    this.shape = 0;
  }

  show() {
    fill("red");
    noStroke();
    circle(this.x, this.y, this.size);
  }

  hits(bubble) {
    let d = dist(this.x, this.y, bubble.x, bubble.y);
    if (d < this.size / 2 + bubble.size / 2) {
      this.markForDelete = 1;
      this.isHit = 1;
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.y -= this.speed;
    // this.x += sin(this.angle);
    if (this.y < 0) {
      this.markForDelete = 1;
      this.isMiss = 1;
    }
  }
}

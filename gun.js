class Gun {
  constructor() {
    this.reset(0);
    this.sound = new Sound();
    this.power = 1;
    this.size = 30;
    this.y = height;
    this.energy = 1000;
  }

  show() {
    fill("black");
    noStroke();
    circle(this.x, this.y, this.size);
    fill("orange");
    circle(this.x, this.y, this.powerFillLevel * 10);

    // this.showBullets();
    this.showEnergy();
    this.showPower();
  }

//   showBullets() {
//     fill(255);
//     textSize(this.size / 4);
//     textAlign(CENTER);
//     text(this.bulletsLeft, this.x, this.y - this.size / 4);
//   }

   showEnergy() {
    fill(255);
    textSize(this.size / 4);
    textAlign(CENTER);
    text(this.energy, this.x, this.y - this.size / 4);
  }
  
  showPower() {
    noFill();
    strokeWeight(4);
    stroke("white");

    circle(this.x, this.y, this.power * this.size / 20);

    //     fill(255);
    //     textSize(15);
    //     textAlign(CENTER);
    //     text(this.power, this.x - 15, this.y - 3);
  }

  changeDir(dir) {
    this.dir = dir;
  }

  changeMoving(mov) {
    this.moving = mov;
  }

  move() {
    if (this.moving) {
      this.x += 2 * this.dir;
    }
  }

  resetPowerLevel() {
    this.powerFillLevel = 0;
    // this.power = 1;
  }

  powersUp() {
    this.powerFillLevel++;

    if (this.powerFillLevel == this.size / 10) {
      this.power++;
      this.powerFillLevel = 0;
    }
  }

  checkDamage(bubble) {
    let d = dist(this.x, this.y, bubble.x, bubble.y);
    if (d < this.size / 2 + bubble.size / 2) {
      this.energy --;
    }
  }
  
  

  fire() {
    sound.fire();

    let bullets = [];
    let grouping = round(random(10000));

    let b = new Bullet(
      this.x,
      this.power,
      0,
      // ((i * 30 * PI) / 180) * (-1 ^ i),
      grouping
    );
    this.bulletsLeft--;
    bullets.push(b);

    // for (let i = 0; i < this.power; i++) {
    //   let b = new Bullet(this.x, 10, i * 30 * PI/180 * (-1 ^ i), grouping);
    //   this.bulletsLeft--;
    //   bullets.push(b);
    // }

    return bullets;
  }

  reset(level) {
    this.dir = 1;
    this.moving = 0;
    this.powerFillLevel = 0;
    // this.power = 1;
    this.bulletsLeft = 100 + level;
    this.size = 50 + level * 10;

    this.x = width / 2;
  }
}

let bubbles = [];
let gun;
let score;
let bullets = [];
let sound;
let level;

function setup() {
  createCanvas(400, 400);
  score = new Score(100);

  gun = new Gun();
  sound = new Sound();
  level = new Level(1);

  restart();
}

function draw() {
  background(220);

  gun.show();
  gun.move();

  for (i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
    bubbles[i].edge();
  }

  for (i = 0; i < bullets.length; i++) {
    bullets[i].show();
    bullets[i].move();
    if (bullets[i].markForDelete) {
      if (bullets[i].isMiss) {
        // console.log("miss", bullets[i].grouping);

        sound.miss();
        gun.resetPowerLevel();
      }

      bullets.splice(i, 1);
      continue;
    }

    // kill bubbles
    let count = bubbles.length;
    for (j = 0; j < count; j++) {
      if (bullets[i].hits(bubbles[j])) {
        sound.hit();
        gun.powersUp();

        // score.increase(bubbles[j].score);
        score.increase(1);
        let halves = bubbles[j].split();
        if (bubbles[j].size > 10) {
          bubbles.splice(j, 1);
          bubbles.push(halves[0]);
          bubbles.push(halves[1]);
        } else {
          bubbles.splice(j, 1);
        }

        break;
      }
    }
  }

  let count = bubbles.length;
  for (j = 0; j < count; j++) {
    gun.checkDamage(bubbles[j]);
    
    if (gun.energy < 0) {
      gameOver();
      break;
    }
  }

  score.show();
  level.show();

  if (bubbles.length === 0) {
    sound.level();
    level.levelUp();
    restart();
  }
}

function gameOver() {
  sound.lose();
  fill(0);
  textSize(60);
  textAlign(CENTER);
  text("Game Over!", width / 2, height / 2);
  noLoop();
}
function restart() {
  gun.reset(level.current);
  // bulletsLeft = 100 * level.current;

  for (i = 0; i < level.current; i++) {
    bubbles[i] = new Bubble(
      level.current,
      200,
      random(0, width),
      random(0, 200)
    );
  }
}

function keyReleased() {
  if (keyCode !== 32) {
    gun.changeMoving(0);
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    gun.changeDir(-1);
    gun.changeMoving(1);
  }

  if (keyCode === RIGHT_ARROW) {
    gun.changeDir(1);
    gun.changeMoving(1);
  }

  if (keyCode === 32) {
    let b = gun.fire();

    bullets.push(...b);
  }
}

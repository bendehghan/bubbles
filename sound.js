class Sound {
  s_miss = loadSound("sounds/miss.mp3");
  s_fire = loadSound("sounds/fire.mp3");
  s_level = loadSound("sounds/level-win.mp3");
  s_game = loadSound("sounds/game-win.mp3");
  s_hit = loadSound("sounds/hit.mp3");
  s_lose = loadSound("sounds/lose.mp3");

  fire() {
    this.s_fire.play();
  }

  miss() {
    this.s_miss.play();
  }
  level() {
    this.s_level.play();
  }
  game() {
    this.s_game.play();
  }
  hit() {
    this.s_hit.play();
  }
  lose() {
    this.s_lose.play();
  }
}

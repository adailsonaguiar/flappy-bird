function collideY(element1, element2) {
  const element1Y = element1.y + element1.height;
  if (element1Y >= element2.y) return true;
  return false;
}

export default function createBird(game) {
  return () => {
    const bird = {
      spriteImage: game.sprites,
      spriteX: 0,
      spriteY: 0,
      width: 33,
      height: 24,
      x: 10,
      y: 50,
      velocity: 0,
      gravity: 0.15,
      update() {
        // console.log(game.currentGround);
        if (collideY(this, game.currentGround)) {
          game.SONG_HIT.play();
          setTimeout(() => game.changeScene(game.Scenes.START), 500);
          return;
        }
        this.velocity = this.velocity + this.gravity;
        this.y = this.y + this.velocity;
      },
      jump() {
        this.velocity = -4.6;
      },
      sceneBird: [
        { spriteX: 0, spriteY: 0 },
        { spriteX: 0, spriteY: 26 },
        { spriteX: 0, spriteY: 52 },
      ],
      currentFrameBird: 0,
      updateFrameBird() {
        const FRAME_INTERVAL = 5;
        const BEATING_WINGS = game.frame % FRAME_INTERVAL === 0;
        if (BEATING_WINGS) {
          if (this.currentFrameBird < 2) {
            this.currentFrameBird++;
          } else {
            this.currentFrameBird = 0;
          }
        }
      },
      draw() {
        this.updateFrameBird();
        const { spriteX, spriteY } = this.sceneBird[this.currentFrameBird];
        game.context.drawImage(
          this.spriteImage,
          spriteX,
          spriteY,
          this.width,
          this.height,
          this.x,
          this.y,
          this.width,
          this.height
        );
      },
    };
    return bird;
  };
}

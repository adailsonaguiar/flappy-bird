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
        if (collideY(bird, game.currentGround)) {
          game.SONG_HIT.play();
          setTimeout(() => game.changeScene(game.Scenes.START), 500);
          return;
        }
        bird.velocity = bird.velocity + bird.gravity;
        bird.y = bird.y + bird.velocity;
      },
      jump() {
        bird.velocity = -4.6;
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
          if (bird.currentFrameBird < 2) {
            bird.currentFrameBird++;
          } else {
            bird.currentFrameBird = 0;
          }
        }
      },
      draw() {
        bird.updateFrameBird();
        const { spriteX, spriteY } = bird.sceneBird[bird.currentFrameBird];
        game.context.drawImage(
          bird.spriteImage,
          spriteX,
          spriteY,
          bird.width,
          bird.height,
          bird.x,
          bird.y,
          bird.width,
          bird.height
        );
      },
    };
    return bird;
  };
}

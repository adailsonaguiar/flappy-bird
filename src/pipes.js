function collideX(element1, element2) {
  if (element1.x >= element2.x) return true;
  return false;
}

export default function createPipes(game) {
  const pipes = {
    spriteImage: game.sprites,
    width: 52,
    height: 400,
    pipeBottom: {
      spriteX: 0,
      spriteY: 169,
    },
    pipeTop: {
      spriteX: 52,
      spriteY: 169,
    },
    space: 80,
    pairs: [],

    draw() {
      pipes.pairs.forEach(function (pair) {
        const drawYRandom = pair.y;
        const pipeTopX = pair.x;
        const pipeTopY = drawYRandom;

        game.context.drawImage(
          pipes.spriteImage,
          pipes.pipeTop.spriteX,
          pipes.pipeTop.spriteY,
          pipes.width,
          pipes.height,
          pipeTopX,
          pipeTopY,
          pipes.width,
          pipes.height
        );

        const spacingTop = 90;
        const pipeBottomX = pair.x;
        const pipeBottomY = pipes.height + spacingTop + drawYRandom;
        game.context.drawImage(
          pipes.spriteImage,
          pipes.pipeBottom.spriteX,
          pipes.pipeBottom.spriteY,
          pipes.width,
          pipes.height,
          pipeBottomX,
          pipeBottomY,
          pipes.width,
          pipes.height
        );
        pair.pipeTop = { x: pipeTopX, y: pipes.height + pipeTopY };
        pair.pipeBottom = { x: pipeBottomX, y: pipeBottomY };
      });
    },
    update() {
      const framesProxPipes = game.frame % 100 === 0;
      if (framesProxPipes) {
        pipes.pairs.push({
          x: game.canvas.width,
          // y: -250 * Math.random() + 1,
          y: -300,
        });
      }

      pipes.pairs.forEach(function (pair) {
        pair.x = pair.x - 2;

        if (collideX(game.currentBird, pair)) {
          if (game.currentBird.y <= pair.pipeTop.y) {
            game.SONG_HIT.play();
            setTimeout(() => game.changeScene(game.Scenes.START), 500);
          }
          if (
            game.currentBird.y + game.currentBird.height >=
            pair.pipeBottom.y
          ) {
            game.SONG_HIT.play();
            setTimeout(() => game.changeScene(game.Scenes.START), 500);
          }
        }

        if (pair.x + pipes.width <= 0) pipes.pairs.shift();
      });
    },
  };
  return pipes;
}

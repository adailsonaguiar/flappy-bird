export default function createGameInit(game) {
  game.frame = 0;

  game.gameInit = {
    spriteImage: game.sprites,
    spriteX: 134,
    spriteY: 0,
    width: 174,
    height: 152,
    x: game.canvas.width / 2 - 174 / 2,
    y: 50,
    draw() {
      game.context.drawImage(
        game.gameInit.spriteImage,
        game.gameInit.spriteX,
        game.gameInit.spriteY,
        game.gameInit.width,
        game.gameInit.height,
        game.gameInit.x,
        game.gameInit.y,
        game.gameInit.width,
        game.gameInit.height
      );
    },
  };
}

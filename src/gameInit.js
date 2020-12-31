export default function createGameInit(game) {
  const frame = 0;

  const gameInit = {
    spriteImage: game.sprites,
    spriteX: 134,
    spriteY: 0,
    width: 174,
    height: 152,
    x: game.canvas.width / 2 - 174 / 2,
    y: 50,
    draw() {
      game.context.drawImage(
        this.spriteImage,
        this.spriteX,
        this.spriteY,
        this.width,
        this.height,
        this.x,
        this.y,
        this.width,
        this.height
      );
    },
  };

  return { frame, gameInit };
}

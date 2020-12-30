export default function createBrackground(game) {
  const background = {
    spriteImage: game.sprites,
    spriteX: 390,
    spriteY: 0,
    width: 275,
    height: 204,
    x: 0,
    y: game.canvas.height - 204,
    draw() {
      game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);
      game.context.drawImage(
        background.spriteImage,
        background.spriteX,
        background.spriteY,
        background.width,
        background.height,
        background.x,
        background.y,
        background.width,
        background.height
      );
      game.context.drawImage(
        background.spriteImage,
        background.spriteX,
        background.spriteY,
        background.width,
        background.height,
        background.x + background.width,
        background.y,
        background.width,
        background.height
      );
    },
  };
  return background;
}

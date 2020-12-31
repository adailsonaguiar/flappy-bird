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
      game.context.fillStyle = "#70c5ce";
      game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);
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
      game.context.drawImage(
        this.spriteImage,
        this.spriteX,
        this.spriteY,
        this.width,
        this.height,
        this.x + this.width,
        this.y,
        this.width,
        this.height
      );
    },
  };
  return background;
}

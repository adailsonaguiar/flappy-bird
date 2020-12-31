export default function createGround(game) {
  return () => {
    const ground = {
      spriteImage: game.sprites,
      spriteX: 0,
      spriteY: 610,
      width: 224,
      height: 112,
      x: 0,
      y: game.canvas.height - 112,
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
      update() {
        const MOVE_GROUND = 1;
        const movement = this.x - MOVE_GROUND;
        const repeat = this.width / 2;

        if (movement > -repeat) this.x = movement;
        else this.x = 0;
      },
    };
    return ground;
  };
}

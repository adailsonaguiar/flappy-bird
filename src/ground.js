export default function createGround(game) {
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
        ground.spriteImage,
        ground.spriteX,
        ground.spriteY,
        ground.width,
        ground.height,
        ground.x,
        ground.y,
        ground.width,
        ground.height
      );

      game.context.drawImage(
        ground.spriteImage,
        ground.spriteX,
        ground.spriteY,
        ground.width,
        ground.height,
        ground.x + ground.width,
        ground.y,
        ground.width,
        ground.height
      );
    },
    update() {
      const MOVE_GROUND = 1;
      const movement = ground.x - MOVE_GROUND;
      const repeat = ground.width / 2;

      if (movement > -repeat) ground.x = movement;
      else ground.x = 0;
    },
  };
  return { ground };
}

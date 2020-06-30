const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('.game-canvas');
const context = canvas.getContext('2d');

const bird = {
  spriteImage: sprites,
  spriteX: 0,
  spriteY: 0,
  width: 33,
  height: 24,
  x: 10,
  y: 50,
  velocity:0,
  gravity:0.15,
  update() {
    bird.velocity = bird.velocity +bird.gravity;
    bird.y = bird.y + bird.velocity;
  },
  draw() {
    context.drawImage(
      bird.spriteImage,
      bird.spriteX,
      bird.spriteY,
      bird.width,
      bird.height,
      bird.x,
      bird.y,
      bird.width,
      bird.height
    );
  },
};

const background = {
  spriteImage: sprites,
  spriteX: 390,
  spriteY: 0,
  width: 275,
  height: 204,
  x: 0,
  y: canvas.height - 204,
  draw() {
    context.fillStyle = '#70c5ce';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(
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
    context.drawImage(
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

const ground = {
  spriteImage: sprites,
  spriteX: 0,
  spriteY: 610,
  width: 224,
  height: 112,
  x: 0,
  y: canvas.height - 112,
  draw() {
    context.drawImage(
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

    context.drawImage(
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
};

// function CutSprite(spriteImage, spriteX, spriteY, width, height, x, y) {
//   this.teste = () => {
//     context.drawImage(
//       spriteImage,
//       spriteX,
//       spriteY,
//       width,
//       height,
//       x,
//       y,
//       spriteX,
//       spriteY
//     );
//   };
// }

// const bird = new CutSprite(sprites, 0, 0, 33, 24, 10, 50);

function loop() {
  background.draw();
  ground.draw();
  bird.update();
  bird.draw();
  requestAnimationFrame(loop);
}

function handleClick() {}
canvas.addEventListener('click', handleClick, false);

loop();

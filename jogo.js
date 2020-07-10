const sprites = new Image();
sprites.src = './assets/sprites.png';
const SONG_HIT = new Audio('./assets/songs/hit.wav');

let frame = 0;
const canvas = document.querySelector('.game-canvas');
const context = canvas.getContext('2d');

function createBird() {
  const bird = {
    spriteImage: sprites,
    spriteX: 0,
    spriteY: 0,
    width: 33,
    height: 24,
    x: 10,
    y: 50,
    velocity: 0,
    gravity: 0.15,
    update() {
      if (collide(bird, currentGround)) {
        SONG_HIT.play();
        setTimeout(() => changeScene(Scenes.START), 500);
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
      const BEATING_WINGS = frame % FRAME_INTERVAL === 0;
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
      context.drawImage(
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
}

function createGround() {
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
    update() {
      const MOVE_GROUND = 1;
      const movement = ground.x - MOVE_GROUND;
      const repeat = ground.width / 2;

      if (movement > -repeat) ground.x = movement;
      else ground.x = 0;
    },
  };
  return ground;
}

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

const gameInit = {
  spriteImage: sprites,
  spriteX: 134,
  spriteY: 0,
  width: 174,
  height: 152,
  x: canvas.width / 2 - 174 / 2,
  y: 50,
  draw() {
    context.drawImage(
      gameInit.spriteImage,
      gameInit.spriteX,
      gameInit.spriteY,
      gameInit.width,
      gameInit.height,
      gameInit.x,
      gameInit.y,
      gameInit.width,
      gameInit.height
    );
  },
};

let activeScene = {};
function changeScene(newScene) {
  activeScene = newScene;
  if (activeScene.init) activeScene.init();
}

let currentBird;
let currentGround;
const Scenes = {
  START: {
    init() {
      currentBird = createBird();
      currentGround = createGround();
    },
    draw() {
      background.draw();
      currentGround.draw();
      currentBird.draw();
      gameInit.draw();
    },
    click() {
      changeScene(Scenes.GAME);
    },
    update() {},
  },
};

Scenes.GAME = {
  draw() {
    background.draw();
    currentGround.draw();
    currentBird.draw();
  },
  click() {
    currentBird.jump();
  },
  update() {
    currentBird.update();
    currentGround.update();
  },
};

function collide(element1, element2) {
  const element1Y = element1.y + element1.height;
  if (element1Y >= element2.y) return true;
  return false;
}

function loop() {
  activeScene.draw();
  activeScene.update();
  frame++;
  requestAnimationFrame(loop);
}

function handleClick() {
  if (activeScene.click()) activeScene.click();
}
canvas.addEventListener('click', handleClick, false);

changeScene(Scenes.START);

loop();

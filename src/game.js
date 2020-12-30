import createSprite from "./sprites.js";
import createCanvas from "./canvas.js";
import createBird from "./bird.js";
import createGround from "./ground.js";
import createPipes from "./pipes.js";
import createBrackground from "./background.js";
import createGameInit from "./gameInit.js";
import createScenes from "./scenes.js";
import createSong from "./songs.js";

let game = {};

const sprites = createSprite(game);
const { canvas, context } = createCanvas(game);
game = {
  ...game,
  sprites,
  canvas,
  context,
};
const SONG_HIT = createSong(game);
const { frame, gameInit } = createGameInit(game);
const background = createBrackground(game);
const {  ground } = createGround(game);
createPipes(game);
game = {
  ...game,
  SONG_HIT,
  frame,
  gameInit,
  background,
  ground,
};
createBird(game);
createScenes(game);

function loop() {
  game.activeScene.draw();
  game.activeScene.update();
  game.frame++;
  requestAnimationFrame(loop);
}

function handleClick() {
  if (game.activeScene.click()) game.activeScene.click();
}

game.canvas.addEventListener("click", handleClick, false);

game.changeScene(game.Scenes.START);

loop();

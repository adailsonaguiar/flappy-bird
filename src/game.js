import createSprite from "./sprites.js";
import createCanvas from "./canvas.js";
import createBird from "./bird.js";
import createGround from "./ground.js";
import createPipes from "./pipes.js";
import createBrackground from "./background.js";
import createGameInit from "./gameInit.js";
import createScenes from "./scenes.js";
import createSong from "./songs.js";

const game = {};

const sprites = createSprite(game);
createCanvas(game);
createSong(game);
createGameInit(game);
createSong(game);
const background = createBrackground(game);
game = { ...game, sprites, background };
createGround(game);
createBird(game);
createPipes(game);
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

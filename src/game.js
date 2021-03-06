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

function gameFactory(game, newProperties) {
  return { ...game, ...newProperties };
}

game = gameFactory(game, { sprites: createSprite() });

game = gameFactory(game, createCanvas(game));

game = gameFactory(game, { SONG_HIT: createSong(game) });

game = gameFactory(game, createGameInit(game));

game = gameFactory(game, { background: createBrackground(game) });

game = gameFactory(game, { createGround: createGround(game) });

game.createBird = createBird(game);

game.createPipes = createPipes(game);

game.Scenes = createScenes(game);

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

game.changeScene = (newScene) => {
  game.activeScene = newScene;
  if (game.activeScene.init) game.activeScene.init();
};

game.changeScene(game.Scenes.START);

loop();

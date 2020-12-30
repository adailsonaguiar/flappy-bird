export default function createScenes(game) {
  game.activeScene = {};

  game.changeScene = (newScene) => {
    game.activeScene = newScene;
    if (game.activeScene.init) game.activeScene.init();
  };

  game.Scenes = {
    START: {
      init() {
        game.currentBird = game.createBird();
        game.currentPipes = game.createPipes();
      },
      draw() {
        game.background.draw();
        game.ground.draw();
        game.currentBird.draw();
        game.gameInit.draw();
      },
      click() {
        game.changeScene(game.Scenes.GAME);
      },
      update() {},
    },
    GAME: {
      draw() {
        game.background.draw();
        game.currentBird.draw();
        game.currentPipes.draw();
        game.ground.draw();
      },
      click() {
        game.currentBird.jump();
      },
      update() {
        game.currentBird.update();
        game.ground.update();
        game.currentPipes.update();
      },
    },
  };
}

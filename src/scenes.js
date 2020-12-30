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
        game.currentGround = game.createGround();
        game.currentPipes = game.createPipes();
      },
      draw() {
        game.makeBackground().draw();
        game.currentGround.draw();
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
        game.makeBackground().draw();
        game.currentBird.draw();
        game.currentPipes.draw();
        game.currentGround.draw();
      },
      click() {
        game.currentBird.jump();
      },
      update() {
        game.currentBird.update();
        game.currentGround.update();
        game.currentPipes.update();
      },
    },
  };
}

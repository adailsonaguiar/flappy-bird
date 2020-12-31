export default function createScenes(game) {
  const Scenes = {
    START: {
      init() {
        game.currentGround = game.createGround();
        game.currentBird = game.createBird();
        game.currentPipes = game.createPipes();
      },
      draw() {
        game.background.draw();
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
        game.background.draw();
        game.currentPipes.draw();
        game.currentGround.draw();
        game.currentBird.draw();
      },
      click() {
        game.currentBird.jump();
      },
      update() {
        game.currentGround.update();
        game.currentPipes.update();
        game.currentBird.update();
      },
    },
  };
  return Scenes;
}

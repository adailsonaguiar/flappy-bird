export default function createCanvas(game) {
  game.canvas = document.querySelector(".game-canvas");
  game.context = game.canvas.getContext("2d");
  game.context.fillStyle = "#70c5ce";
}

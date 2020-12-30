export default function createCanvas() {
  const canvas = document.querySelector(".game-canvas");
  const context = canvas.getContext("2d");
  context.fillStyle = "#70c5ce";

  return { canvas, context };
}

export default function createCanvas() {
  const canvas = document.querySelector(".game-canvas");
  const context = canvas.getContext("2d");

  return { canvas, context };
}

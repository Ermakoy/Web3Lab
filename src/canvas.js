import { WIDTH, HEIGHT } from "./constants";
import { prepareQuote } from "./quote";

export const initCanvas = () => {
  const canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  return canvas;
};

export const getPreparedCanvas = () => {
  const canvas = initCanvas();

  const ctx = canvas.getContext("2d");
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.filter = "grayscale(35%)";

  return { ctx, canvas };
};

export const displayImages = (images, ctx, offsets) =>
  images.forEach((image, i) =>
    ctx.drawImage(image, offsets[i].left, offsets[i].top)
  );

export const displayQuote = (ctx, quote) =>
  prepareQuote(quote).forEach((chunk, index, { length }) => {
    ctx.shadowColor = "black";
    ctx.shadowBlur = 7;
    ctx.lineWidth = 3;
    ctx.strokeText(chunk, 250, 250 + 40 * (index - length / 2));
    ctx.shadowBlur = 0;
    ctx.fillStyle = "white";

    ctx.fillText(chunk, 250, 250 + 40 * (index - length / 2));
  });

export const setCanvasToLoading = ctx => ctx.fillText("Loading...", 250, 50);

export const clearCanvas = ctx => ctx.clearRect(0, 0, 500, 500);

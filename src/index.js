import "./styles.css";
import {
  getPreparedCanvas,
  setCanvasToLoading,
  displayImages,
  clearCanvas,
  displayQuote
} from "./canvas";
import { getRandomInt } from "./utils";
import { getImages } from "./image";
import { DIMENSIONS_MAP } from "./constants";
import { getQuote, prepareQuote } from "./quote";

let ref;

const func = () => {
  const { ctx, canvas } = getPreparedCanvas();
  document.body.appendChild(canvas);
  ref = async () => {
    clearCanvas(ctx);
    setCanvasToLoading(ctx);

    const imageCount = getRandomInt(3, 5);
    const images = await getImages(imageCount);
    const quote = await getQuote();
    clearCanvas(ctx);
    displayImages(
      images,
      ctx,
      DIMENSIONS_MAP[imageCount].map(({ offset }) => offset)
    );
    displayQuote(ctx, prepareQuote(quote));
  };
  ref();
};

func();

document.getElementById("refresh").onclick = ref;

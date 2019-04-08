import { DIMENSIONS_MAP, COLLECTION } from "./constants";
import { getRandomInt, $ } from "./utils";
import source from "./example.png";

const getImage = path =>
  new Promise(resolve => {
    const img = new Image();

    img.src = path;
    img.onload = () => resolve(img);
  });

export const getImages = count => {
  const { checked } = document.getElementById("checkbox");
  return Promise.all(
    DIMENSIONS_MAP[count].map(({ dimensions: [width, height] }) =>
      getImage(
        !checked || getRandomInt(0, 100) > 30
          ? `${COLLECTION}${width}x${height}`
          : source
      )
    )
  );
};

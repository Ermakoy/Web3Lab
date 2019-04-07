import { DIMENSIONS_MAP, COLLECTION } from "./constants";

const getImage = path =>
  new Promise(resolve => {
    const img = new Image();
    img.src = path;
    img.onload = () => resolve(img);
  });

export const getImages = count =>
  Promise.all(
    DIMENSIONS_MAP[count].map(({ dimensions: [width, height] }) =>
      getImage(`${COLLECTION}${width}x${height}`)
    )
  );

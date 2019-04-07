export const COLLECTION = "https://source.unsplash.com/collection/1337228/";

export const QUOTE_URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

export const [WIDTH, HEIGHT] = [500, 500];

const constructImagePreset = ([width, height, left, top]) => ({
  dimensions: [width, height],
  offset: { top, left }
});

export const DIMENSIONS_MAP = {
  3: [[500, 300, 0, 0], [200, 200, 0, 300], [300, 200, 200, 300]].map(
    constructImagePreset
  ),
  4: [
    [300, 200, 0, 0],
    [200, 200, 300, 0],
    [200, 300, 0, 200],
    [300, 300, 200, 200]
  ].map(constructImagePreset),
  5: [
    [100, 150, 0, 0],
    [140, 150, 100, 0],
    [260, 150, 240, 0],
    [200, 350, 0, 150],
    [300, 350, 200, 150]
  ].map(constructImagePreset)
};

import { QUOTE_URL } from "./constants";
import chunk from "lodash.chunk";
export const getQuote = async () => {
  const response = await fetch(QUOTE_URL);

  const [{ quote }] = await response.json();

  return quote.replace(/\.\.\./g, " ");
};

export const prepareQuote = quote => chunk(quote.split(" "), 5);

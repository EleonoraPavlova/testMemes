import { instance } from "./instance";

export const cardsApi = {
  getCards: () => instance.get("/cards"),
};
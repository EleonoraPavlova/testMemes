import { Card } from "@/shared/types";

const hydrateCardFromLocalStorage = (
  card: Card,
  keysToHydrate?: Array<keyof Card>
): Partial<Card> => {
  const updated: Partial<Card> = {};

  (keysToHydrate ?? (Object.keys(card) as Array<keyof Card>)).forEach((key) => {
    const storedValue = localStorage.getItem(`${card.id}-${key}`);
    if (storedValue !== null && storedValue !== undefined) {
      if (key === "likes") {
        updated["likes"] = Number(storedValue);
      } else {
        updated[key] = storedValue;
      }
    }
  });

  return updated;
};
export default hydrateCardFromLocalStorage;

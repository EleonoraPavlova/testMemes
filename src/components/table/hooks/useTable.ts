import { useCallback } from "react";

import { ColumnKey } from "@/components/table/table.const";
import TableRenderers from "@/components/table/table-renderers";
import { useAppSelector } from "@/services/hooks";
import { Card } from "@/shared/types";
import hydrateCardFromLocalStorage from "@/shared/utils/hydrateCardFromLocalStorage";

const UseTable = () => {
  const cards = useAppSelector((state) => state.items.cards);

  const renderCell = useCallback((card: Card, columnKey: ColumnKey) => {
    const renderers = TableRenderers(card);
    return renderers[columnKey] ?? card[columnKey as keyof Card];
  }, []);

  const hydratedCards = cards.map((card) => ({
    ...card,
    ...hydrateCardFromLocalStorage(card),
  }));

  return {
    cards: hydratedCards,
    renderCell,
  };
};

export default UseTable;

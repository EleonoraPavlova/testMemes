import { JSX } from "react";

import DropdownHeroui from "@/components/dropdown";
import ImageLink from "@/components/image-link";
import { ColumnKey } from "@/components/table/table.const";
import { Card } from "@/shared/types";

const TableRenderers = (card: Card): Record<ColumnKey, JSX.Element | string | number> => {
  const cellValue = (key: keyof Card) => card[key];

  return {
    id: <p>{card.id}</p>,
    name: <p>{card.name}</p>,
    image: <ImageLink imageUrl={card.image} />,
    likes: <span>{cellValue("likes")}</span>,
    actions: <DropdownHeroui cardId={card.id} />,
  };
};
export default TableRenderers;

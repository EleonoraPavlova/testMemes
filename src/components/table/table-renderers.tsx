import {Link} from "@heroui/react";
import {JSX} from "react";

import ButtonHeroui from "@/components/button";
import {ColumnKey} from "@/components/table/table.const";
import {Card} from "@/types";

const TableRenderers = (card: Card): Record<ColumnKey, JSX.Element | string | number> => {
 const cellValue = (key: keyof Card) => card[key];

 return {
  id: <p>{card.id}</p>,
  name: <p>{card.name}</p>,
  image: (
   <Link href={String(cellValue)} target="_blank">
    view
   </Link>
  ),
  likes: <span>{cellValue("likes")}</span>,
  actions: <ButtonHeroui name={"Edit"}/>
 };
};
export default TableRenderers;

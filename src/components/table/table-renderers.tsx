import {Link} from "@heroui/react";
import {JSX} from "react";

import ModalHeroui from "@/components/modal";
import {ColumnKey} from "@/components/table/table.const";
import {Card} from "@/shared/types";

const TableRenderers = (card: Card): Record<ColumnKey, JSX.Element | string | number> => {
 const cellValue = (key: keyof Card) => card[key];

 return {
  id: <p>{card.id}</p>,
  name: <p>{card.name}</p>,
  image: (
   <Link href={card.image} target="_blank" className="text-purple-600 hover:underline">
    view
   </Link>
  ),
  likes: <span>{cellValue("likes")}</span>,
  actions: <ModalHeroui/>
 };
};
export default TableRenderers;

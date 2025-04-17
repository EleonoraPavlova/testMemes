import {Dropdown, DropdownItem, DropdownMenu, DropdownProps, DropdownTrigger} from "@heroui/react";
import {ReactElement} from "react";

import EditDocumentIcon from '@/assets/icons/edit'
import ButtonHeroui from "@/components/button";
import ImageLink from "@/components/image-link";
import {Card} from "@/shared/types";

type DropdownHerouiProps = {
 card: Card;
} & Partial<DropdownProps>;

const DropdownHeroui = ({card}: DropdownHerouiProps): ReactElement => {
 const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

 return (
  <Dropdown className="shadow-sm shadow-gray-500">
   <DropdownTrigger>
    <ButtonHeroui>Edit</ButtonHeroui>
   </DropdownTrigger>
   <DropdownMenu aria-label="Card Info">
    {Object.entries(card).map(([key, value]) => (
     <DropdownItem key={key} startContent={<EditDocumentIcon className={iconClasses}/>}>
      {key === "image" ? <ImageLink imageUrl={String(value)}/> : (`${key}: ${String(value)}`)}
     </DropdownItem>
    ))}
   </DropdownMenu>
  </Dropdown>
 );
}
export default DropdownHeroui;
import {Dropdown, DropdownItem, DropdownMenu, DropdownProps, DropdownTrigger} from "@heroui/react";
import {ReactElement} from "react";

import ButtonHeroui from "@/components/button";
import DropdownItemLink from "@/components/dropdown/dropdown-item-link";
import useDropdown from "@/components/dropdown/hooks/useDropdown";
import EditableInput from "@/components/editable-input";
import {Card} from "@/shared/types";

export type DropdownHerouiProps = {
	card: Card;
} & Partial<DropdownProps>;

const DropdownHeroui = ({card}: DropdownHerouiProps): ReactElement => {

	const {
		isEditing,
		editedValue,
		updatedCard,
		setEditedValue,
		handleKeyDown,
		handleSave,
		onEditClick,
	} = useDropdown({card})

	return (
		<Dropdown className="shadow-sm shadow-gray-500 w-72" closeOnSelect={false}>
			<DropdownTrigger>
				<ButtonHeroui>Edit</ButtonHeroui>
			</DropdownTrigger>
			<DropdownMenu aria-label="Card Info">
				{Object.entries(updatedCard).map(([key, value]) => (
					<DropdownItem key={key} textValue={key}>
						{isEditing === key ? (
							<EditableInput handleSave={handleSave} handleKeyDown={handleKeyDown} fieldName={key} editedValue={editedValue}
																						setEditedValue={setEditedValue}/>
						) : <DropdownItemLink value={value} onEditClick={onEditClick} fieldKey={key}/>
						}
					</DropdownItem>
				))}
			</DropdownMenu>
		</Dropdown>
	);
}
export default DropdownHeroui;
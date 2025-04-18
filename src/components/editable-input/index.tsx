import { Input } from "@heroui/react";
import { KeyboardEvent, ReactElement } from "react";

import ButtonHeroui from "@/components/button";

type EditableInputProps = {
  handleSave: () => void;
  handleKeyDown: (e: KeyboardEvent<HTMLButtonElement>) => void;
  fieldName: string;
  editedValue: string;
  setEditedValue: (value: string) => void;
};

const EditableInput = ({
  handleSave,
  handleKeyDown,
  fieldName,
  setEditedValue,
  editedValue,
}: EditableInputProps): ReactElement => {
  return (
    <div className="flex items-center gap-1.5">
      <Input
        label={fieldName}
        value={editedValue}
        size="sm"
        variant="bordered"
        labelPlacement="outside-left"
        onChange={(e) => setEditedValue(e.target.value)}
      />
      <ButtonHeroui onPress={handleSave} onKeyDown={handleKeyDown} color="success" variant="light">
        Save
      </ButtonHeroui>
    </div>
  );
};

export default EditableInput;

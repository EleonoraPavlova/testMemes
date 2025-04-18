import { Input } from "@heroui/react";
import { ChangeEvent, KeyboardEvent, ReactElement, useCallback, useMemo, useState } from "react";

import ButtonHeroui from "@/components/button";
import { validateLikes, validateName, validateUrl } from "@/shared/utils/validators";

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
  const [errorMessage, setErrorMessage] = useState("");

  const validateInput = (value: string, field: string): string => {
    const validators: Record<string, (value: string) => string> = {
      name: validateName,
      image: validateUrl,
      likes: validateLikes,
    };

    return validators[field]?.(value) ?? "";
  };

  const isValid = useMemo(() => {
    const validationMessage = validateInput(editedValue, fieldName);
    setErrorMessage(validationMessage);
    return validationMessage === "";
  }, [editedValue, fieldName]);

  const handleValueChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setEditedValue(e.target.value);
    },
    [setEditedValue]
  );

  return (
    <div className="flex items-center gap-1.5">
      <Input
        label={fieldName}
        value={editedValue}
        size="sm"
        variant="bordered"
        labelPlacement="outside-left"
        onChange={handleValueChange}
        isInvalid={!isValid}
        errorMessage={errorMessage}
      />
      <ButtonHeroui
        onPress={handleSave}
        onKeyDown={handleKeyDown}
        color="success"
        variant="light"
        disabled={!isValid}
      >
        Save
      </ButtonHeroui>
    </div>
  );
};

export default EditableInput;

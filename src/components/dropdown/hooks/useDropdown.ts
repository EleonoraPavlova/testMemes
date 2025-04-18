import { KeyboardEvent, MouseEvent, useCallback, useEffect, useState } from "react";

import { DropdownHerouiProps } from "@/components/dropdown";
import { Card } from "@/shared/types";

const useDropdown = ({ card }: DropdownHerouiProps) => {
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");
  const [updatedCard, setUpdatedCard] = useState<Card>(card);

  const handleEditClick = useCallback((key: string, value: string) => {
    setIsEditing(key);
    setEditedValue(value);
  }, []);

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter") {
      handleSave();
    }
  };

  useEffect(() => {
    const updated: Partial<Card> = {};

    (Object.keys(card) as Array<keyof Card>).forEach((key) => {
      const storedValue = localStorage.getItem(key);

      if (storedValue !== null && storedValue !== undefined) {
        if (key === "likes") {
          updated["likes"] = Number(storedValue);
        } else {
          updated[key] = storedValue;
        }
      }
    });

    setUpdatedCard((prev) => ({ ...prev, ...updated }));
  }, [card, isEditing]);

  const handleSave = () => {
    if (isEditing) {
      localStorage.setItem(isEditing, editedValue);
      setUpdatedCard((prev) => ({
        ...prev,
        [isEditing]: editedValue,
      }));
    }
    setIsEditing(null);
  };

  const onEditClick = useCallback(
    (key: string, value: string) => (e: MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      handleEditClick(key, value);
    },
    [handleEditClick]
  );

  return {
    isEditing,
    editedValue,
    updatedCard,
    setEditedValue,
    handleKeyDown,
    handleSave,
    onEditClick,
  };
};

export default useDropdown;

import { KeyboardEvent, MouseEvent, useCallback, useEffect, useState } from "react";

import { mockCard } from "@/components/dropdown/dropdown.const";
import { updateCard } from "@/services/cardsSlice";
import { useAppDispatch, useAppSelector } from "@/services/hooks";
import { Card } from "@/shared/types";
import hydrateCardFromLocalStorage from "@/shared/utils/hydrateCardFromLocalStorage";

const useDropdown = (cardId: string) => {
  const dispatch = useAppDispatch();
  const card =
    useAppSelector((state) => state.items.cards.find((c) => c.id === cardId)) ?? mockCard;

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
    const hydratedCard = hydrateCardFromLocalStorage(card, Object.keys(card) as Array<keyof Card>);

    setUpdatedCard((prev) => ({ ...prev, ...hydratedCard }));
  }, [card, isEditing, cardId]);

  const handleSave = () => {
    if (isEditing) {
      localStorage.setItem(`${cardId}-${isEditing}`, editedValue);

      const newCard = {
        ...updatedCard,
        [isEditing]: editedValue,
      };

      setUpdatedCard(newCard);
      dispatch(updateCard(newCard));
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

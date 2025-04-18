import { ReactNode, useEffect } from "react";

import { cardsThunks } from "@/services/cardsSlice";
import { useAppDispatch } from "@/services/hooks";

const CardsProvider = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(cardsThunks.getCards());
  }, [dispatch]);

  return <>{children}</>;
};

export default CardsProvider;

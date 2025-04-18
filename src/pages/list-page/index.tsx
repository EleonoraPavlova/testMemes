import { ReactElement, useEffect } from "react";

import CardsHeroui from "@/components/cards";
import { PageLayout } from "@/components/page-layout";
import { cardsThunks } from "@/services/cardsSlice";
import { useAppDispatch, useAppSelector } from "@/services/hooks";

const ListPage = (): ReactElement => {
  const dispatch = useAppDispatch();

  const error = useAppSelector((state) => state.items.error);
  const isLoading = useAppSelector((state) => state.items.isLoading);
  const success = useAppSelector((state) => state.items.success);

  useEffect(() => {
    dispatch(cardsThunks.getCards());
  }, [dispatch]);

  return (
    <PageLayout isLoading={isLoading} error={error} success={success} title={"List of Memes"}>
      <CardsHeroui />
    </PageLayout>
  );
};

export default ListPage;

import { ReactElement, useEffect } from "react";

import { PageLayout } from "@/components/page-layout";
import TableCards from "@/components/table";
import { cardsThunks } from "@/services/cardsSlice";
import { useAppDispatch, useAppSelector } from "@/services/hooks";

const TablePage = (): ReactElement => {
  const dispatch = useAppDispatch();

  const error = useAppSelector((state) => state.items.error);
  const isLoading = useAppSelector((state) => state.items.isLoading);
  const success = useAppSelector((state) => state.items.success);

  useEffect(() => {
    dispatch(cardsThunks.getCards());
  }, [dispatch]);

  return (
    <PageLayout isLoading={isLoading} error={error} success={success} title={"Table of Memes"}>
      <TableCards />
    </PageLayout>
  );
};

export default TablePage;

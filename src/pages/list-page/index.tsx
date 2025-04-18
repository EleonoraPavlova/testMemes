import { ReactElement } from "react";

import CardsHeroui from "@/components/cards";
import { PageLayout } from "@/components/layout";

const ListPage = (): ReactElement => {
  return (
    <PageLayout title={"List of Memes"}>
      <CardsHeroui />
    </PageLayout>
  );
};

export default ListPage;

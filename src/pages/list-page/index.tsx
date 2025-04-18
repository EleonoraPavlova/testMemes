import { ReactElement } from "react";

import { PageLayout } from "@/components/page-layout";

const ListPage = (): ReactElement => {
  return (
    <PageLayout isLoading={true} error={"error"} title={"List of Memes"}>
      {"hfhhdjs"}
    </PageLayout>
  );
};

export default ListPage;

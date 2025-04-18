import { ReactElement } from "react";

import { PageLayout } from "@/components/layout";
import TableCards from "@/components/table";

const TablePage = (): ReactElement => {
  return (
    <PageLayout title={"Table of Memes"}>
      <TableCards />
    </PageLayout>
  );
};

export default TablePage;

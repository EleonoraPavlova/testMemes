import { RouteObject } from "react-router-dom";

import ListPage from "@/pages/list-page";
import TablePage from "@/pages/table-page";
import { PATH } from "@/shared/enums";

export const router: RouteObject[] = [
  {
    path: PATH.TABLE,
    element: <TablePage />,
  },
  {
    path: PATH.LIST,
    element: <ListPage />,
  },
  {
    path: PATH.NOT_FOUND_ROUTE,
    element: <TablePage />,
  },
];

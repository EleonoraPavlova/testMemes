import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { ReactElement } from "react";

import useTable from "@/components/table/hooks/useTable";
import { ColumnKey, columns } from "@/components/table/table.const";
import { Card } from "@/shared/types";

const TableCards = (): ReactElement => {
  const { renderCell, cards } = useTable();

  return (
    <Table aria-label="User information table" shadow="md" selectionMode="single" color="secondary">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} className="text-lg">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={cards}>
        {(item: Card) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey as ColumnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableCards;

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/react";
import { ReactElement, useCallback } from "react";

import { ColumnKey, columns } from "@/components/table/table.const";
import TableRenderers from "@/components/table/table-renderers";
import { useAppSelector } from "@/services/hooks";
import { Card } from "@/shared/types";

const TableCards = (): ReactElement => {
  const cards = useAppSelector((state) => state.items.cards);

  const renderCell = useCallback((card: Card, columnKey: ColumnKey) => {
    const renderers = TableRenderers(card);
    return renderers[columnKey] ?? card[columnKey as keyof Card];
  }, []);

  return (
    <Table aria-label="User information table" shadow="md">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} className="text-lg">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={cards}>
        {(item: Card) => (
          <TableRow key={item.id} className="hover:bg-[hsl(240,3.7%,15.88%)] transition-colors">
            {(columnKey) => <TableCell>{renderCell(item, columnKey as ColumnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};

export default TableCards;

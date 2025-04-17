import {Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@heroui/react";
import {ReactElement, useCallback} from "react";

import {ColumnKey, columns} from "@/components/table/table.const";
import TableRenderers from "@/components/table/table-renderers";
import {Card} from "@/shared/types";


type TableCardsProps = {
	cards: Card[];
};

const TableCards = ({cards}: TableCardsProps): ReactElement => {

	const renderCell = useCallback((card: Card, columnKey: ColumnKey) => {
		const renderers = TableRenderers(card);
		return renderers[columnKey] ?? card[columnKey as keyof Card];
	}, []);

	return (
		<Table aria-label="User information table" shadow='md'>
			<TableHeader columns={columns}>
				{(column) => (
					<TableColumn key={column.uid} className="text-lg">
						{column.name}
					</TableColumn>
				)}
			</TableHeader>
			<TableBody items={cards}>
				{(item: Card) => (
					<TableRow key={item.id}
															className="hover:bg-[hsl(240,3.7%,15.88%)] transition-colors">
						{(columnKey) => <TableCell>{renderCell(item, columnKey as ColumnKey)}</TableCell>}
					</TableRow>
				)}
			</TableBody>
		</Table>
	);
};

export default TableCards;

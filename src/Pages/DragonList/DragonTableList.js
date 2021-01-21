import React from "react";

export default function DragonTableList({ list }) {
	return (
		<table>
			<thead>
				<tr>
					<th> Nome </th>
					<th> Tipo </th>
					<th> Data de Criação </th>
				</tr>
			</thead>
			<tbody>
				{list.map((dragon) => {
					return (
						<tr>
							<td>{dragon.name}</td>
							<td>{dragon.type}</td>
							<td>{dragon.createdAt}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
}

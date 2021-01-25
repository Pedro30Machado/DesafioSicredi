import React, { useContext } from "react";
import styles from "./DL.module.css";
import Context from "../GlobalStates/Context";

export default function DragonTableList({ list }) {
	const { dragons } = useContext(Context);
	return (
		<table className={styles.table}>
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
				{dragons.map((dragon) => {
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

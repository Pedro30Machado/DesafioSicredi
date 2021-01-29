import React from "react";
import styles from "./DL.module.css";
import { ReactComponent as DeleteIcon } from "../../assets/images/excluir.svg";
import { ReactComponent as EditIcon } from "../../assets/images/editar.svg";

export default function DragonTableList({ list, onDelete }) {
	return (
		<div className={styles.container}>
			{list.map((dragon) => {
				return (
					<details className={styles.details}>
						<summary> {dragon.name} </summary>

						<dd className={styles.innerContent}>
							{" "}
							Tipo: {dragon.type}{" "}
						</dd>
						<dd className={styles.innerContent}>
							{" "}
							Data de Criação: {dragon.createdAt}{" "}
						</dd>
						<dd className={styles.innerContent}>
							<button className={styles.edit}>
								<EditIcon />
							</button>
						</dd>
						<dd className={styles.innerContent}>
							<button
								className={styles.del}
								onClick={onDelete}
							>
								<DeleteIcon />
							</button>
						</dd>
					</details>
				);
			})}
		</div>
	);
}

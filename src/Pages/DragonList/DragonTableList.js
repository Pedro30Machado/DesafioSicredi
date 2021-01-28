import React from "react";
import styles from "./DL.module.css";

export default function DragonTableList({ list }) {
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
					</details>
				);
			})}
		</div>
	);
}

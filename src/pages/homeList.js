import React from "react";
import styles from "./home.module.css";
import { ReactComponent as DeleteIcon } from "../assets/images/delete-icon.svg";
import { ReactComponent as UpdateIcon } from "../assets/images/update-icon.svg";

export default function homeList({ list, onDelete, onOpenModal }) {
	return (
		<div className={styles.home}>
			{list.map((dragon) => {
				return (
					<details>
						<summary> {dragon.name} </summary>
						<dd> Type: {dragon.type} </dd>
						<dd> Creation Date: {dragon.createdAt} </dd>
						<dd>
							<button
								className={styles.button}
								onClick={() => onOpenModal(dragon.id)}
							>
								<UpdateIcon />
							</button>
							<button
								className={styles.button}
								onClick={() => onDelete(dragon.id)}
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

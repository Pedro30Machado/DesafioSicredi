import React from "react";
import styles from "./modal.module.css";
import { ReactComponent as CloseIcon } from "../../assets/images/close-icon.svg";

export default function Modal(props) {
	return (
		<>
			<div className={styles.backdrop} onClick={props.onCloseModal} />
			<div className={styles.modal}>
				<form onSubmit={props.onUpdate}>
					<button
						type="button"
						className={styles.closeButton}
						onClick={props.onCloseModal}
					>
						<CloseIcon />
					</button>
					<input
						className={styles.name}
						name="name"
						placeholder="New name"
						autoComplete="off"
						type="text"
					></input>
					<input
						className={styles.type}
						name="type"
						placeholder="New type"
						autoComplete="off"
						type="text"
					></input>
					<button className={styles.button} type="submit">
						Edit Dragon
					</button>
				</form>
			</div>
		</>
	);
}

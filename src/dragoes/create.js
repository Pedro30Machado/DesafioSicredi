import React from "react";
import styles from "./create.module.css";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { criar } from "../store/dragonsReducer";
import { useHistory } from "react-router-dom";

const CreateDragon = (props) => {
	const history = useHistory();

	const handleAddDragon = (e) => {
		e.preventDefault();
		const dragon = {
			name: e.target.name.value,
			type: e.target.type.value,
		};
		props.criar(dragon);
		alert("O dragão foi criado!");
		history.push("/home");
	};
	
	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<h1> Create Yor Dragon! </h1>

				<form onSubmit={handleAddDragon}>
					<input
						className={styles.name}
						type="text"
						placeholder="Name"
						name="name"
						autoComplete="off"
					/>
					<br></br>
					<br></br>
					<input
						className={styles.type}
						type="text"
						placeholder="Type"
						name="type"
						autoComplete="off"
					/>
					<br></br>
					<br></br>
					<button className={styles.button} type="submit">
						Create Dragon!
					</button>
				</form>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	dragons: state.dragons.dragons,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ criar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateDragon);

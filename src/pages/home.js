import React, { useEffect, useState } from "react";
import Modal from "./modal/modal";
import HomeList from "./homeList";
import sort from "./sort";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { listar, deletar, editar } from "../store/dragonsReducer";

const Home = (props) => {
	const [dragonToEdit, setDragonToEdit] = useState(null);

	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = (id) => {
		setDragonToEdit(id);
		setShowModal(true);
	};
	const handleCloseModal = () => {
		setShowModal(false);
	};

	const handleUpdateDragon = (e) => {
		e.preventDefault();
		const dragon = {
			name: e.target.name.value,
			type: e.target.type.value,
		};
		console.log(dragonToEdit, dragon);
		props.editar(dragonToEdit, dragon);
		setShowModal(false);
	};

	useEffect(() => {
		props.listar();
	}, []);

	return (
		<>
			<HomeList
				list={sort(props.dragons, "name", "a")}
				onDelete={props.deletar}
				onOpenModal={handleOpenModal}
			/>
			{showModal && (
				<Modal
					onCloseModal={handleCloseModal}
					onUpdate={handleUpdateDragon}
				/>
			)}
		</>
	);
};
const mapStateToProps = (state) => ({
	dragons: state.dragons.dragons,
});

const mapDispatchToProps = (dispatch) =>
	bindActionCreators({ listar, deletar, editar }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);

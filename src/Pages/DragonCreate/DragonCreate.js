import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import Context from "../GlobalStates/Context";
import * as dragonsActions from "../GlobalStates/actions";
import * as yup from "yup";
import styles from "./DC.module.css";

export default function DragonCreate() {
	const { dragons, dispatchDragons } = useContext(Context);

	useEffect(() => {
		console.log(dragons);
	}, [dragons]);

	const {
		getFieldProps,
		touched,
		errors,
		isValid,
		handleSubmit,
	} = useFormik({
		initialValues: {
			name: "",
			type: "",
			createdAt: "",
		},

		validationSchema: yup.object({
			createdAt: yup
				.string()
				.required("Insira todas as informações do dragão."),
		}),

		onSubmit: (values, formikBag) => {
			dispatchDragons(
				dragonsActions.addDragon(
					values.name,
					values.type,
					values.createdAt
				)
			);
			formikBag.setFieldValue("name", "", false);
			formikBag.setFieldValue("type", "", false);
			formikBag.setFieldValue("createdAt", "", false);
		},
	});

	const inputValues = useRef(null);

	useEffect(() => {
		inputValues.current.focus();
	}, []);

	return (
		<form className={styles.container} onSubmit={handleSubmit}>
			<input
				className={styles.input}
				type="text"
				autocomplete="off"
				placeholder="Nome do Dragão"
				ref={inputValues}
				{...getFieldProps("name")}
			/>

			<input
				className={styles.input}
				type="text"
				autocomplete="off"
				placeholder="Tipo do Dragão"
				{...getFieldProps("type")}
			/>

			<input
				className={styles.input}
				type="date"
				autocomplete="off"
				placeholder="Data de Criação"
				{...getFieldProps("createdAt")}
			/>
			{touched.createdAt && errors.createdAt ? (
				<small className={styles.error}>{errors.createdAt}</small>
			) : null}

			<button
				className={styles.button}
				type="submit"
				disabled={!isValid}
			>
				Criar Dragão
			</button>
		</form>
	);
}

/*

import React from "react";
import axios from "axios";
import styles from "./DC.module.css";
import getDragons from "../DragonList/DragonList";

export default class DragonCreate extends React.Component {
	
	state = {
		name: "",
		type: "",
	};

	handleChange = (event) => {
		this.setState({ name: event.target.value, type: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();

		const dragon = {
			name: this.state.name,
			type: this.state.type,
		};

		axios.post(
			"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
			{ dragon }
		).then((res) => {
			getDragons(res.data);
		});
	};

	render() {
		return (
			<div className={styles.container}>
				<form onSubmit={this.handleSubmit}>
					<input
						className={styles.input}
						type="name"
						autocomplete="off"
						placeholder="Nome do Dragão"
						onChange={this.handleChange}
						onfocus="this.value='';"
					/>

					<input
						className={styles.input}
						type="type"
						autocomplete="off"
						placeholder="Tipo do Dragão"
						onChange={this.handleChange}
						onfocus="this.value='';"
					/>

					<button className={styles.button} type="submit">
						{" "}
						Criar Dragão{" "}
					</button>
				</form>
			</div>
		);
	}
}
*/

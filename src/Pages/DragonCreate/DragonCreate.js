import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import Context from "../GlobalStates/Context";
import * as yup from "yup";
import styles from "./DC.module.css";
import axios from "axios";

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
		},

		validationSchema: yup.object({
			name: yup
				.string()
				.required("Insira todas as informações do dragão."),
		}),

		onSubmit: (values, formikBag) => {
			axios.post(
				"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon",
				{ name: values.name, type: values.type }
			).then(() => {
				axios.get(
					"http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
				).then((res) => {
					dispatchDragons({
						type: "FETCH_DRAGONS",
						payload: res.data,
					});
				});
			});
			formikBag.setFieldValue("name", "", false);
			formikBag.setFieldValue("type", "", false);
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
			{touched.name && errors.name ? (
				<small className={styles.error}>{errors.name}</small>
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

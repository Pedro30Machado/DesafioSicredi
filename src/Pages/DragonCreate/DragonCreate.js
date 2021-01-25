import React, { useContext, useEffect, useRef } from "react";
import { useFormik } from "formik";
import Context from "../GlobalStates/Context";
import * as dragonsActions from "../GlobalStates/actions";
import * as yup from "yup";
import styles from "./DC.module.css";

export default function CreateDragon() {
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
				{" "}
				Criar Dragão{" "}
			</button>
		</form>
	);
}

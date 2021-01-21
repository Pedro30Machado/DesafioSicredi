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

	const formik = useFormik({
		initialValues: {
			name: "",
			type: "",
			createdAt: "",
		},
		validationSchemaN: yup.object({
			name: yup.string().required("Insira o nome do dragão."),
		}),
		validationSchemaT: yup.object({
			type: yup.string().required("Insira o tipo do dragão."),
		}),
		validationSchema: yup.object({
			createdAt: yup
				.string()
				.required("Insira a data de criação do dragão."),
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
		<form className={styles.container} onSubmit={formik.handleSubmit}>
			<input
				className={styles.input}
				type="text"
				autocomplete="off"
				placeholder="Nome do Dragão"
				ref={inputValues}
				{...formik.getFieldProps("name")}
			/>
			{formik.touched.name && formik.errors.name ? (
				<small className={styles.error}>{formik.errors.name}</small>
			) : null}

			<input
				className={styles.input}
				type="text"
				autocomplete="off"
				placeholder="Tipo do Dragão"
				ref={inputValues}
				{...formik.getFieldProps("type")}
			/>
			{formik.touched.type && formik.errors.type ? (
				<small className={styles.error}>{formik.errors.type}</small>
			) : null}

			<input
				className={styles.input}
				type="text"
				autocomplete="off"
				placeholder="Data de Criação"
				ref={inputValues}
				{...formik.getFieldProps("createdAt")}
			/>
			{formik.touched.createdAt && formik.errors.createdAt ? (
				<small className={styles.error}>
					{formik.errors.createdAt}
				</small>
			) : null}

			<button className={styles.button} type="submit">
				{" "}
				Criar Dragão{" "}
			</button>
		</form>
	);
}

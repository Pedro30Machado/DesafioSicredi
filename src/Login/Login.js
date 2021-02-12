import React from "react";
import axios from "axios";
import styles from "./login.module.css";
import { ErrorMessage, Formik, Form, Field } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
const Login = () => {
	const history = useHistory();

	const API_URL = "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon";

	const handleSubmit = (values) => {
		axios.post(API_URL, values).then((res) => {
			const { data } = res;
			if (data) {
				localStorage.setItem("app-token", data);
				history.push("/home");
			}
		});
	};

	const validations = yup.object().shape({
		email: yup.string().email().required(),
		password: yup.string().min(8).required(),
	});

	return (
		<>
			<h1 className={styles.h1}>Login</h1>
			<Formik
				initialValues={{}}
				onSubmit={handleSubmit}
				validationSchema={validations}
			>
				<Form className={styles.form}>
					<div>
						<Field
							name="email"
							className={styles.field}
							placeholder="Email"
							autoComplete="off"
						/>
						<br />
						<ErrorMessage
							component="span"
							name="email"
							className={styles.error}
						/>
					</div>
					<div>
						<Field
							name="password"
							className={styles.field}
							placeholder="Password"
							autoComplete="off"
						/>
						<br />
						<ErrorMessage
							component="span"
							name="password"
							className={styles.error}
						/>
					</div>
					<button className={styles.button} type="submit">
						Login
					</button>
				</Form>
			</Formik>
		</>
	);
};

export default Login;

import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className={styles.menu}>
			<ul>
				<li>
					<Link to="/home">
						<button> Dragons </button>
					</Link>
				</li>
				<li>
					<Link to="/create">
						<button> Create </button>
					</Link>
				</li>
				<li>
					<Link to="/">
						<button> Login </button>
					</Link>
				</li>
			</ul>
		</div>
	);
}
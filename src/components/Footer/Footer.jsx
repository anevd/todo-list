import React from "react";
import styles from "./footer.module.css";

function Footer() {
	return (
		<footer className={`page-footer blue lighten-4 ${styles.footer} `}>
			<div className="footer-copyright blue lighten-3">
				<div className="container">© 2023 ToDo App</div>
			</div>
		</footer>
	);
}

export default Footer;

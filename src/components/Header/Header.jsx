import React from "react";

function Header() {
	const headerText = {
		fontSize: "30px",
		fontWeight: 700,
	};
	return (
		<nav className="blue lighten-3">
			<div className="nav-wrapper container">
				<div style={headerText}>TODAY</div>
			</div>
		</nav>
	);
}

export default Header;

import React from "react";

function Footer() {
	return (
		<footer style={styles.footer}>
			<p>My first React app, all rights reserved &copy; 2021</p>
		</footer>
	);
}

const styles = {
	footer: {
		backgroundColor: "grey",
		color: "white",
		textAlign: "center",
		padding: "10px",
	},
};

export default Footer;

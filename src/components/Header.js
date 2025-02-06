import React from "react";

function Header(props) {
	return (
		<header style={styles.header}>
			<div>
				<h1>React TO-DO App</h1>
				<h3>{props.name}</h3>
				<nav style={styles.navList}>
					<ul style={styles.ul}>
						<li style={styles.li}>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='/about'>About</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}

const styles = {
	header: {
		backgroundColor: "black",
		color: "white",
		textAlign: "center",
		padding: "10px",
	},
	navList: {
		display: "flex",
		listStyle: "none",
		padding: "0",
		justifyContent: "center",
	},
	ul: {
		display: "flex",
		listStyle: "none",
		padding: "0",
	},
	li: {
		margin: "0 10px",
	},
};

export default Header;

import { Typography } from "@mui/material";
import React from "react";
import logo from "../../images/tringle-logo.png";

function MainContent() {
	return (
		<>
			<div className="row">
				<div className="column banner-content">
					<Typography
						variant="h3"
						align="center"
						sx={{
							mr: 2,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "white",
							textDecoration: "none",
							textAlign: "center",
						}}>
						CREATIVE DEVELOPER
					</Typography>
					<Typography
						variant="h3"
						align="center"
						sx={{
							mr: 2,
							fontFamily: "monospace",
							fontWeight: 400,
							letterSpacing: ".3rem",
							color: "white",
							textDecoration: "none",
							textAlign: "center",
						}}>
						Sensible To Fullstack
					</Typography>
				</div>
				<div className="column banner-logo">
					<img src={logo} alt="" />
				</div>
			</div>
		</>
	);
}

export default MainContent;

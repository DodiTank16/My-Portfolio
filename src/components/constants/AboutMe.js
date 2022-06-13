import { Typography } from "@mui/material";
import React from "react";
import logo from "../../images/tringle-logo.png";

function MainContent() {
	return (
		<>
			<div className="container">
				<div>
					<Typography
						variant="h3"
						align="left"
						sx={{
							mr: 2,
							fontFamily: "Eczar",
							fontWeight: 400,
							letterSpacing: ".2rem",
							color: "white",
							textDecoration: "none",
							textAlign: "center",
						}}>
						About Me{" "}
					</Typography>
				</div>
			</div>
		</>
	);
}

export default MainContent;

import { Typography } from "@mui/material";
import React from "react";
import logo from "../../images/tringle-logo.png";

function MainContent() {
	return (
		<>
			<div className="container">
				<div className="banner">
					<div className="banner-content">
						<Typography
							variant="h3"
							className="content-one"
							align="center"
							sx={{
								mr: 2,
								paddingTop: 1.2,
								fontFamily: "Eczar",
								// background: `linear-gradient(90deg, rgba(19,7,71,1) 27%, rgba(117,38,87,1) 52%, rgba(19,7,71,1) 81%)`,
								fontWeight: 400,
								letterSpacing: ".2rem",
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
								fontFamily: "Lobster",
								fontWeight: 400,
								letterSpacing: ".3rem",
								color: "white",
								textDecoration: "none",
								textAlign: "center",
							}}>
							Sensible To Fullstack
						</Typography>
					</div>
					{/* <div className="banner-image">
						<img src={logo} alt="" />
					</div> */}
				</div>
				<div className="box banner-image">
					{/* <div class="content"> */}
					<img src={logo} alt="" />
					{/* </div> */}
				</div>
			</div>
		</>
	);
}

export default MainContent;

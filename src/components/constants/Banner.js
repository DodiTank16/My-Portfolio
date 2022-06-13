import { Typography } from "@mui/material";
import React from "react";
import Typed from "typed.js";
import logo from "../../images/tringle-logo.png";

function MainContent() {
	const el = React.useRef(null);
	// Create reference to store the Typed instance itself
	const typed = React.useRef(null);

	React.useEffect(() => {
		const options = {
			strings: [
				// "Some <i>strings</i> are slanted",
				// "Some <strong>strings</strong> are bold",
				"<strong>Developer</strong>",
				"<strong>Designer</strong>",
				"<strong>Music Producer</strong>",
				"<strong>Disk Jockey</strong>",
			],
			typeSpeed: 100,
			backSpeed: 100,
			backDelay: 999,
			loop: true,
		};

		// elRef refers to the <span> rendered below
		typed.current = new Typed(el.current, options);

		return () => {
			// Make sure to destroy Typed instance during cleanup
			// to prevent memory leaks
			typed.current.destroy();
		};
	}, []);

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
								fontWeight: 400,
								letterSpacing: ".2rem",
								color: "white",
								textDecoration: "none",
								textAlign: "center",
							}}>
							Hi, i am Dodi,
						</Typography>
						{/* //! Method 1 */}
						{/* <div className="type-wrap">
							<h1>
								A Creative <span style={{ whiteSpace: "pre" }} ref={el} />
							</h1>
						</div> */}
						{/*//! Buttons to Control the TEXT Animation */}
						{/* <button onClick={() => typed.current.toggle()}>Toggle</button>
						<button onClick={() => typed.current.start()}>Start</button>
						<button onClick={() => typed.current.stop()}>Stop</button>
						<button onClick={() => typed.current.reset()}>Reset</button>
						<button onClick={() => typed.current.destroy()}>Destroy</button> */}
						{/* //! Method 2 */}
						<Typography
							variant="h3"
							align="center"
							sx={{
								mr: 2,
								fontFamily: "Kdam Thmor Pro",
								letterSpacing: ".3rem",
								color: "white",
								textDecoration: "none",
								textAlign: "center",
							}}>
							A creative <span style={{ whiteSpace: "pre" }} ref={el} />
							{/* A Creative Devloper And Sensible To Fullstack */}
						</Typography>
					</div>
					<div className="box ">
						<div className="banner-image">
							<img src={logo} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainContent;

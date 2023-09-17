import React from "react";
// import { Link } from "react-router-dom";

function MainContent() {
	return (
		<>
			<div className="container">
				<div className="section-two">
					<div className="about-heading title-section">
						<h1>
							ABOUT <span>ME</span>
						</h1>
						<span className="title-bg">Resume</span>
					</div>
					<div className="aboutme">
						<div className="table">
							<div className="info-header">personal infos</div>
							<ul className="aboutinfo">
								<li>
									First Name: <span className="d-block">Dodi</span>
								</li>
								<li>
									Last Name: <span className="d-block"> Tank</span>
								</li>

								<li>
									Age: <span className="d-block font">21 Years</span>
								</li>
								<li>
									Nationality: <span className="d-block font">Indian</span>
								</li>

								<li>
									Address: <span className="d-block font">Rajkot, Gujarat</span>
								</li>
								<li>
									Email:{" "}
									<span className="d-block font">tankdodi@gmail.com</span>
								</li>

								<li>
									Skype: <span className="d-block font">tank.dodi</span>
								</li>
								<li>
									Languages:{" "}
									<span className="d-block font">English, Gujarati, Hindi</span>
								</li>
							</ul>
							<div className="downloadcv">
								{/* <Link to="/">Home</Link> |{" "} */}
							</div>
						</div>
						<div className="cards">
							<div className="row">
								<div className="card">
									<div className="box-stats with-margin">
										<h3 className="box-no">1+</h3>
										<p className="box-content">
											years of <span className="d-block">experience</span>
										</p>
									</div>
								</div>
								<div className="card">
									<div className="box-stats with-margin">
										<h3 className="box-no">2+</h3>
										<p className="box-content">Projects done</p>
									</div>
								</div>
								<div className="card">
									<div className="box-stats with-margin">
										<h3 className="box-no">12</h3>
										<p className="box-content">
											years of <span className="d-block">experience</span>
										</p>
									</div>
								</div>
								<div className="card">
									<div className="box-stats with-margin">
										<h3 className="box-no">12</h3>
										<p className="box-content">
											years of <span className="d-block">experience</span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainContent;

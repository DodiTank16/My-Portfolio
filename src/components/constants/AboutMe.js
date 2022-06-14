import React from "react";

function MainContent() {
	return (
		<>
			<div className="container">
				<div className="section-two">
					<div className="about-heading title-section">
						<h1>
							ABOUT <span>ME</span>
						</h1>
						<span class="title-bg">Resume</span>
					</div>
					<div className="aboutme">
						<div className="about-table">
							<table border={1}>
								<tr>
									<td colSpan={2}>
										<h3>PERSONAL INFOS</h3>
									</td>
								</tr>
								<tr>
									<td>
										First Name: <strong>Dodi</strong>
									</td>
									<td>
										Last Name: <strong> Tank</strong>
									</td>
								</tr>
								<tr>
									<td>
										Age: <strong>21 Years</strong>
									</td>
									<td>
										Nationality: <strong>Indian</strong>
									</td>
								</tr>
								<tr>
									<td>
										Address: <strong>Rajkot, Gujarat</strong>
									</td>
									<td>
										Email: <strong>tankdodi@gmail.com</strong>
									</td>
								</tr>
								<tr>
									<td>
										Skype: <strong>tank.dodi</strong>
									</td>
									<td>
										Languages: <strong>English, Gujarati, Hindi</strong>
									</td>
								</tr>
							</table>
						</div>
						<div className="cards">Hello World</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainContent;

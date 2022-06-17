import "./App.css";
// import { BrowserRouter, Router, Routes } from "react-router-dom";
import Header from "./components/constants/Header";
import Banner from "./components/constants/Banner";
import AboutMe from "./components/constants/AboutMe";

function App() {
	return (
		<>
			{/* <BrowserRouter> */}
			{/* <Routes> */}
			<Header />
			<Banner />
			<AboutMe />
			{/* </Routes> */}
			{/* </BrowserRouter> */}
		</>
	);
}

export default App;

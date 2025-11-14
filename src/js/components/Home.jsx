import React from "react";

// import components
import BarraNavegacion from "./BarraNavegacion"
import CardsRow from './CardsRow';
import Jumbotron from './Jumbotron';
import Footer from "./Footer";

//create your first component
export default function Home() {
	return (
		<div>
			<BarraNavegacion/>
			<Jumbotron/>
			<CardsRow/>
			<Footer />
		</div>
	);
};
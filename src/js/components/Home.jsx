import React from "react";

// import components
import BarraNavegacion from "./BarraNavegacion"
import CardsRow from './CardsRow';
import Jumbotron from './Jumbotron';

//create your first component
export default function Home() {
	return (
		<div>
			<BarraNavegacion/>
			<Jumbotron/>
			<CardsRow/>
		</div>
	);
};
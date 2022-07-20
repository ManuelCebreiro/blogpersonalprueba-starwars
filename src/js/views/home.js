import React, {useContext} from "react";
import "../../styles/home.css";
import { Cards } from "../component/cards";
import { Context } from "../store/appContext";




export const Home = () => {
	const { store, actions } = useContext(Context);

	const datospersonajes = store.characters;
	const datosvehiculos = store.vehicles;
	const datosplanetas = store.planets;
	console.log(datospersonajes)


	return (
		<div className="container-fluid ">
			<h1>Characters</h1>
			<div id={"scrolltime"} className="row flex-nowrap ">
				{datospersonajes.map((element) => {
					return <Cards  name={element.name} id={element.uid} />;
				})}
			</div>
			<h1>Planets</h1>
			<div id={"scrolltime"} className="row flex-nowrap ">
				{datosplanetas.map((element) => {
					return <Cards  name={element.name} id={element.uid} />;
				})}
			</div>
			<h1>Vehicles</h1>
			<div id={"scrolltime"} className="row flex-nowrap ">
				{datosvehiculos.map((element) => {
					return <Cards  name={element.name} id={element.uid} />;
				})}
			</div>

		</div>
	);
}

import React, { useState, useEffect } from 'react';
import "./styles/Actor.css"


function Actor() {
	const [actors, setActors] = useState(null);
	useEffect(() => {
		fetch(
			"https://demo-1655722854865.azurewebsites.net/Home/Get_All_Actors")
			.then((res) => res.json())
			.then(setActors)
	}, [])




	if (actors === null) return <div>
		<h1> Pleses wait some time.... </h1> </div>;

	return (

		<div className="Actor">
			<h1> Fetch data from API </h1> {
				actors.map((actor) => (
					<ol key={actor.actor_id} >
						Actor ID: {actor.actor_id}<br></br>
						First Name: {actor.first_name}<br></br>
						Last name {actor.last_name}<br></br>
					</ol>
				))
			}
		</div>
	);

}

export default Actor;


import React from 'react';
import Card from './Card';
const CardList = ({planets}) => {
	return (
		<div>
			{planets.map((planet, i) => {
				return (
			<Card  key={i} 
			name={planets[i].name} 
			gravity={planets[i].gravity} 
			terrain={planets[i].terrain} 
			population={planets[i].population} /> )
			})}
		</div>
		);
}

export default CardList;
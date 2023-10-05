import React from 'react';
import { SearchBar } from './SearchBar';

export const SearchResults = (props) => {
	return (
		<div>
			<ul className="list-style">
				{props.childProp.map((dog) => {
					if (!dog.image) {
						console.log(dog)
						return
					}
					return (
						<li key={dog.id}>
							<div>
								<h2>Name: {dog.name}</h2>
								<h3>Height: {dog.height.imperial} inches tall at the shoulders</h3>
								<h3>Lifespan: {dog.life_span}</h3>
								<img src={dog.image.url} width="500" height="360" />
								<hr />
							</div>
						</li>

					)
				})}
			</ul>
		</div>
	)
}

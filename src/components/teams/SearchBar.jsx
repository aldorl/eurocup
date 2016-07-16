import React from 'react';

let SearchBar = ({  }) => (
	<div className="row">
		<div className="twelve columns">
			<input
				type="text"
				className="u-full-width"
				placeholder="Search teams by name..."
				style={({
					marginBottom: '0.5em'
				})}
				/>
		</div>
	</div>
);

export default SearchBar;

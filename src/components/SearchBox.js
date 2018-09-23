import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa2'>
			<input className='pa3 ba yellow b--silver bg-black' type='search' placeholder='search' onChange={searchChange}></input>
		</div>
		);
}

export default SearchBox;
import React from 'react';

const Card = ({name, gravity, terrain, population}) => {
	return (
		<article className="tc bg-near-black dib br3 ba b--silver grow bw2 shadow-5 mv3 w-100 w-50-m w-25-l ma3">
  <img src="https://via.placeholder.com/350x150" className="db w-100 br2 br--top" alt="placeholder" />
  <div className="pa2 ph3-ns pb3-ns">
    <div className="dt w-100 mt1">
      <div className="dtc">
        <h2 className="f5 f4-ns mv0">{name}</h2>
      </div>
    </div>
    <p className="f6 lh-copy measure mt2 white">
      <b>Gravity:</b> {gravity}<br /><b>Terrain:</b> {terrain}<br />
      <b>Population:</b> {population}
    </p>
  </div>
</article>
		);
}

export default Card;


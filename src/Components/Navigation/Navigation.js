import React from 'react';
import './Navigation.css'

const Navigation = ({value, checkPath, onReset}) => {

	return (
		<div className={value}>
		  <button onClick={() => checkPath('up')}>Up</button>
		  <button onClick={() => checkPath('down')}>Down</button>
		  <button onClick={onReset}>New</button>
		</div>
	)
}

export default Navigation
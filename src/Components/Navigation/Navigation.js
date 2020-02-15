import React from 'react';
import './Navigation.css'

const Navigation = ({value, checkPath}) => {
	// console.log(value)
	return (
		<div className={value}>
		  <button onClick={() => checkPath('up')}>Up</button>
		  <button onClick={() => checkPath('down')}>Down</button>
		  <button>New</button>
		</div>
	)
}

export default Navigation
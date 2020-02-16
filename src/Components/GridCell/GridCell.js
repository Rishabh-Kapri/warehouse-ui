import React from 'react'
import './GridCell.css'

const GridCell = ({ handleClick, value }) => {
	let classVal = ''
	if (value) {
		classVal = 'Bg-Color ' +value
	}

	return (
		<div className='Cell'>
		  <button className={classVal} onClick={() => handleClick()} >
		    {value}
		  </button>
		</div>
	)
}

export default GridCell
import React from 'react'
import './GridCell.css'

const GridCell = ({ handleClick, value }) => {

	return (
		<div className='Cell'>
		  <button className={value} onClick={() => handleClick()} >
		    {value}
		  </button>
		</div>
	)
}

export default GridCell
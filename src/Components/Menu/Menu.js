import React from 'react'
import { ReactComponent as Drone } from '../../drone_delivery.svg'
import './Menu.css'

const Menu = ({ handleSubmit, handleRowsInput, handleColsInput }) => {
	return (
		<section className='Main'>
			<div className='Menu-Container'>
			  <div className='Text-Content'>
				  <h2 className='Title'>Grid Size</h2>
				  <div className='Group'>
				    <input 
				      name='rows' 
				      placeholder='Enter Rows'
				      onChange={handleRowsInput} />
				  </div>
				  <div className='Group'>
				    <input 
				      name='columns' 
				      placeholder='Enter Columns'
				      onChange={handleColsInput} />
				  </div>
				  <div className='Group'>
				    <button
				      className='Button'
				      onClick={handleSubmit}
				      >Start
				    </button>
			    </div>
			  </div>
			  <Drone onClick={handleSubmit} className='Image'/>		  
			</div>
		</section>
	)
}

export default Menu
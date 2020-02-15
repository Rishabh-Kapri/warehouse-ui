import React, { useMemo } from 'react'
import GridCell from '../GridCell/GridCell'
import layout from '../../layout'
import './GridLayout.css'

const GridLayout = ({ handleClick, classVal }) => {
	let value = ''
	
	// get the layout of the warehouse based on json
	// empty spaces denote aisle
	// numbers denote rows
	// alphabets denote columns
	// cell denote a column where drone will scan
	return (
		<div className='Container'>
		  <table className='Table'>
		    <tbody>{
		      Object.keys(layout).map((row, i) => {
		      		const entry = layout[row].map((item ,i) => {
		      					if (i === 0) {
		      						return (
		      							<td key={i}>
		      							  <div key={i}>{item}</div>
		      							</td>
		      						)
		      					} else if (item === 'cell') {
		      						let val = row + ',' + i
		      						if (classVal.S === val){
		      							value = 'S'
		      						}
		      						else if (classVal.E === val){
		      							value = 'E'
		      						}
		      						else if (classVal['Path'].includes(val)){

		      							value = 'P'
		      						}
		      						else {
		      							value = ''
		      						}

		      						return (
		      							<td key={i}>
		      							  <GridCell key={i} value={value} handleClick={() => handleClick(val)} />
		      							</td>
		      						)
		      					} else {
		      						return (
		      							<td key={i}>
		      							  {item}
		      							</td>
		      						)
		      					}
		      		  })
		      		   return (
		      		   	<tr key={row}>
		      		   	  {entry}
		      		   	</tr>
		      		   )
		      		
		      	})
		    }
		    
		    </tbody>
		  </table>

		</div>
	)
}

export default GridLayout
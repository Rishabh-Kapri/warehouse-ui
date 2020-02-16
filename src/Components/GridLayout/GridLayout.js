import React from 'react'
import GridCell from '../GridCell/GridCell'
import layout from '../../layout'
import './GridLayout.css'
import { ReactComponent as ArrowUp } from '../../chevron-up-solid.svg'
import { ReactComponent as ArrowDown } from '../../chevron-down-solid.svg'


const GridLayout = ({ handleClick, classVal }) => {
	let value = ''

	const findClassValue = (currentIndex) => {
		if (classVal.S === currentIndex){
			return 'S'
		}
		else if (classVal.E === currentIndex){
			return 'E'
		}
		else if (classVal['Path'][0].includes(currentIndex)){
			return <ArrowDown />
		}
		else if (classVal['Path'][1].includes(currentIndex)){
			return <ArrowUp />
		}
		else {
			return ''
		}
	}

	// get the layout of the warehouse based on json
	// empty spaces denote aisle
	// numbers denote rows
	// alphabets denote columns
	// cell denote a column where drone will scan
	const findTableCell = (i, item, row) => {
		if (i === 0) {
			return (
				<td key={i}>
				  <div key={i}>{item}</div>
				</td>
			)
		} 
		else if (item === 'cell') {
			let val = row + ',' + i
			value = findClassValue(val)
		
			return (
				<td key={i}>
				  <GridCell key={i} value={value} handleClick={() => handleClick(val)} />
				</td>
			)
		}
		else {
			return (
				<td key={i}>
				  {item}
				</td>
			)
		}
	}
	
	return (
		<div className='Container'>
		  <table className='Table'>
		    <tbody>{
		      Object.keys(layout).map((row, i1) => {
		      		const entry = layout[row].map((item ,i2) => {
		      			return findTableCell(i2, item, row)
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
import React, { useState, useEffect } from 'react';
import GridLayout from './Components/GridLayout/GridLayout'
import Menu from './Components/Menu/Menu'
import PathRight from './Components/Pathing/PathRight'
import PathLeft from './Components/Pathing/PathLeft'
import Navigation from './Components/Navigation/Navigation'

import './App.css';

function App() {
  const [submit, setSubmit] = useState(true)
  // const [value, setValue] = useState('')

  const [classVal, setClassVal] = useState({
    'S': '',
    'E': '',
    'Path': []
  })

  // define what rows and cols is the effective data
  const [rows, setRows] = useState([1,2,3,4,5,6,7,8,9,10])
  const [cols, setCols] = useState([1,4,5,8,9,12,13,16,17,20])


  const checkPath = (dir) => {
    let start = classVal['S'].split(',')
    let end = classVal['E'].split(',')

    let sj = start[1]
    let ej = end[1]
    console.log(classVal.S, classVal.E)
    console.log(sj, ej, Boolean(sj === ej))

    if (sj <= ej) {
      console.log('inside right')
      handleDirection(start, end, dir, PathRight)
    }
    else if (sj > ej) {
      handleDirection(start, end, dir, PathLeft)
    }

  }

  const handleDirection = (start, end, dir, path) => {

    if (dir === 'down') {
      setClassVal(prev => ({
        ...prev,
        'Path': path(start, end, rows, cols, 0)
      }))
    }
    else if (dir === 'up') {
      setClassVal(prev => ({
        ...prev,
        'Path': path(start, end, rows, cols, 1)
      }))
    }
  }
  

  const handleClick = (id) => {
    // console.log(id)
    // check whether we have already set up a starting point
    if (!classVal.S) {
      setClassVal(prev => ({
        ...prev,
        'S': id
      }))

    }
    
    // set the end point only if starting point is set
    else if (!classVal.E && classVal.S) {
      setClassVal(prev => ({
        ...prev,
        'E': id
      }))
    }
  }
  // console.log(classVal)

  return (
    <div className="App">
      <h1>Drone In A Warehouse</h1>
      <GridLayout handleClick={handleClick} classVal={classVal} />
      <Navigation value={Boolean(classVal['S'] && classVal['E']) ? 'Show' : 'Hidden'}
        checkPath={checkPath}            
      />
        
    </div>
  );
}

export default App;

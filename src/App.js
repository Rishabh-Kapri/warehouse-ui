import React, { useState, useEffect } from 'react';
import GridLayout from './Components/GridLayout/GridLayout'
import PathRight from './Components/Pathing/PathRight'
import PathLeft from './Components/Pathing/PathLeft'
import Navigation from './Components/Navigation/Navigation'
import './App.css';

function App() {

  const initialState = {
    'S': '',
    'E': '',
    'Path': []
  }

  // state to store starting, end and path positions
  const [classVal, setClassVal] = useState(initialState)

  // define what rows and cols is of the warehouse
  const [rows, setRows] = useState([1,2,3,4,5,6,7,8,9,10])
  const [cols, setCols] = useState([1,4,5,8,9,12,13,16,17,20])

  // start new mission
  const onReset = () => {
    setClassVal(initialState)
  }

  // check which direction we have to move
  // if starting column is less than end column
  // move right, else move left
  //
  // After direction is determined pass the relevant
  // function to check for up and down motion
  const checkPath = (dir) => {
    let start = classVal['S'].split(',')
    let end = classVal['E'].split(',')

    let sj = start[1]
    let ej = end[1]
    
    if (sj <= ej) {
      handleDirection(start, end, dir, PathRight)
    }
    else {
      handleDirection(start, end, dir, PathLeft)
    }

  }

  // checks for up and down motion and gives us the path
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
  
 // set starting and end positions
  const handleClick = (id) => {
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

  return (
    <div className="App">
      <h1>Drone In A Warehouse</h1>
      <GridLayout handleClick={handleClick} classVal={classVal} />
      <Navigation value={Boolean(classVal['S'] && classVal['E']) ? 'Show' : 'Hidden'}
        checkPath={checkPath} 
        onReset={onReset}           
      />
        
    </div>
  );
}

export default App;

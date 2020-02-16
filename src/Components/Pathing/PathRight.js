// Algo to traverse from right to left
// It takes start and end positions
// And rows and columns array of the warehouse
// Then a direction is set
// 0 --> down
// 1 --> up

const PathDown = (start, end, rows, cols, dir) => {
	// Set starting points
	let si = parseInt(start[0])
	let sj = parseInt(start[1])
	let ei = parseInt(end[0])
	let ej = parseInt(end[1])

  // Temp variables
	let a = si
	let z = sj
	// Array to store the paths that need to be highlighted
	let path = {
		0: [],
		1: []
	}

  // main loop to check if we are on the nd column
	while(sj <= ej){
	  if(dir === 0){
	    a = si;
	    // move down the rows
	    // if end point is met, break
	    for(; a<=rows.length; a++){
	      if (a === ei && z === ej)
	        break;
	      else {
	      	// also break if column isn't a valid one
	      	if (!cols.includes(z))
	      		break
	        path[0].push(a.toString() + ',' + z.toString())
	        si = a
	      }
	    }
	    // if reached at the end of row change column
	    // and direction
	    if (z <= ej){
	      sj++;
	      z++;
	      dir = 1;
	    }
	  }
	  else if(dir === 1) {
	    a = si;
	    // move up the rows
	    // if end point is met, break
	    for(; a>=1; a--){
	      if (a === ei && z === ej)
	        break;
	      else {
	      	// also break is column isn't valid
	      	if (!cols.includes(z))
	      		break
	        path[1].push(a.toString() + ',' + z.toString())
	        si = a
	       }
	    }
	    // if reached at the end of row change column
	    // and direction
	    if (z <= ej){
	      sj++;
	      z++;
	      dir = 0;
	    }
	  }	
	}
	return path
}

export default PathDown
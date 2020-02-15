const PathDown = (start, end, rows, cols, dir) => {
	let si = parseInt(start[0])
	let sj = parseInt(start[1])
	let ei = parseInt(end[0])
	let ej = parseInt(end[1])

	let a = si
	let z = sj
	let path = []

	while(sj <= ej){
	  if(dir === 0){
	    a = si;
	    for(; a<=rows.length; a++){
	      if (a === ei && z === ej)
	        break;
	      else {
	      	if (!cols.includes(z))
	      		break
	        path.push(a.toString() + ',' + z.toString())
	        console.log(a, z)
	        si = a
	      }
	    }
	    if (z <= ej){
	      sj++;
	      z++;
	      dir = 1;
	    }
	  }
	  else if(dir === 1) {
	    a = si;
	    for(; a>=1; a--){
	      if (a === ei && z === ej)
	        break;
	      else {
	      	if (!cols.includes(z))
	      		break
	        path.push(a.toString() + ',' + z.toString())
	        console.log(a, z)
	        si = a
	       }
	    }
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
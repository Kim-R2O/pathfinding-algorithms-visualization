import React, { useEffect, useState } from 'react';
import Node from './Node/Node';

function PathfindingVisualization() {
    const [nodes, setNodes] = useState([]);

	useEffect(() =>{
		const nodes = [];
	    for (let row=0; row<20; row++) {
		  const currentRow = [];
		  for (let col = 0; col< 50; col++) {
			currentRow.push([]);
		  }
		  nodes.push(currentRow);
		}
		setNodes({nodes})

	})

	return(
	   <div className="grid">
          {nodes.map((row, rowIdx) => {
          	return <div>
          	  {row.map((node, nodeIdx) => <Node></Node>)}
          	</div>
          })}
        </div>
	);
}

export default PathfindingVisualization;
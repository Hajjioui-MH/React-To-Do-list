import React from 'react'


const Scroll = (props)=>{
	const scrollSyle = {overflowY : 'scroll', border : '0.5px solid black', height : '20em',width:'450px'}
	return(
		<div style={scrollSyle}>
			{props.children}
		</div>
	)
}

export default Scroll;
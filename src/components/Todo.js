import React from 'react'
import './Todo.css'

const Todo = ({text,checked,done,deleteMe,edit,dragStart,dragEnd,drop})=>{
	const mstyle = {color: '#555',opacity:0.4};
	return(
		<div style={checked?mstyle:null} className="todoWraaper draggable" 
		draggable="true" 
		onDragStart={dragStart} 
		onDragEnd={dragEnd}
		onDrop={drop}>
			<li style={checked?{textDecorationLine: 'line-through'}:null}>{text}</li>
			<button className='pa2 bg-yellow' onClick={edit} ><i className="far fa-edit"></i></button>
			<button className='pa2 bg-green' onClick={done}>check</button>
			<button className='pa2 bg-red' onClick={deleteMe}>delete</button>
		</div>
	)
	
}


export default Todo;
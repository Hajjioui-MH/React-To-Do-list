import React from 'react'
import Todo from './Todo'

export const TodoList = ({myTodo,checkHandler,deleteHandler,editHandler,dragStartHandler,dragEndtHandler,dropHandler,dragOverHandler})=>{
	const allTodo = myTodo.map((todo,i)=>{
		return(
			<Todo 
			key={todo.todoId} 
			id={todo.todoId}
			text={todo.todoText} 
			checked={todo.checked}
			done={()=>checkHandler(todo.todoId)}
			deleteMe={(e)=>deleteHandler(todo.todoId,e)}
			edit={()=>editHandler(todo.todoId)}
			dragStart={ (e)=> dragStartHandler(e,todo.todoId)}
			dragEnd = { (e)=> dragEndtHandler(e,todo.todoId)}  
			drop={(e)=> dropHandler(e,todo.todoId)}
			/>
		)
	})
	return(
		<div className='container ma0.5' onDragOver={dragOverHandler}>
			{allTodo}
		</div>
	)
}

export default TodoList;
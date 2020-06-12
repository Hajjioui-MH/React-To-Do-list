import React ,{Component} from 'react'
import './App.css'
import TodoList from '../components/TodoList'
import Input from '../components/Input'
import Scroll from '../components/Scroll'

class App extends Component{
	constructor(){
		super();
		this.state = {
			list : [],
			input : '',
			id:0,
			checked:false
		}
	}

	inputHundler = (e)=>{
		this.setState({input : e.target.value});
	}
	addHandler = (e)=>{
		e.preventDefault();
		const {list,input,id,checked} = this.state;
		if (input.length !== 0) {
			this.setState({id : id+1});
			const newTodo = {todoId:id,todoText:input,checked:checked}
			const newList = list.concat(newTodo);
			this.setState({list : newList,input : ''});
		}
		else
			alert('vid input');
		
	}
	checkHandler = (id)=>{
		const newList = this.state.list.map(todo => {
			if (todo.todoId === id)
				todo.checked = !todo.checked;
			return todo;
		});
		this.setState({list:newList})
	}
	deleteHandler = (id,e)=>{
		const todo_Div = e.target.parentElement;
		todo_Div.classList.add("fall");
		const newList = this.state.list.filter(todo=>todo.todoId !== id);
		const slowDelet = ()=> {
			this.setState({list : newList});
			return
		}
		setTimeout( slowDelet, 400) ;
	}
	editHandler = (id)=>{
		const {list} = this.state;
		const todo = list.filter(todo=>todo.todoId === id)[0];
		const newList = list.filter(todo=>todo.todoId !== id);
		this.setState({input : todo.todoText , list : newList});

	}
	dragStartHandler = (e,id)=>{
		const parent = e.target;
		parent.classList.add('dragging')
	}
	dragEndtHandler = (e,id)=>{
		const parent = e.target;
		parent.classList.remove('dragging')
	}
	getDragAfterElement = (container, y)=> {
	  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

	  return draggableElements.reduce((closest, child) => {
		    const box = child.getBoundingClientRect()
		    const offset = y - box.top - box.height / 2
		    if (offset < 0 && offset > closest.offset) {
		      return { offset: offset, element: child }
		    } else {
		      return closest
		    }
	  }, { offset: Number.NEGATIVE_INFINITY }).element
	}
	dragOverHandler = (e)=>{
		e.preventDefault();
		const container = document.querySelector('.container')
		const afterElement = this.getDragAfterElement(container, e.clientY)
	    const draggable = document.querySelector('.dragging')
	    if (afterElement == null) {
	      container.appendChild(draggable)
	    } else {
	      container.insertBefore(draggable, afterElement)
	    }
	}
	dropHandler = (e,id)=>{
		//console.log('drop '+id);
	}
	clear = (e)=>{
		e.preventDefault();
		this.setState({list : [],input : ''});}

	render(){
	  return (
		    <div className="wrapper">
		    <Scroll className='scroll'>
			      <TodoList 
			      myTodo={this.state.list}
			      checkHandler={this.checkHandler}
			      deleteHandler={this.deleteHandler}
			      editHandler={this.editHandler}
			      dragStartHandler = { this.dragStartHandler }
			      dragEndtHandler = { this.dragEndtHandler } 
			      dropHandler = {this.dropHandler}
			      dragOverHandler ={this.dragOverHandler}
			      />
		     </Scroll>

		      <Input 
		      value={this.state.input} 
		      addInput={this.addHandler} 
		      getInput={this.inputHundler}
		      clear={this.clear}/>
		    </div>
		  );
	}	
}

export default App;

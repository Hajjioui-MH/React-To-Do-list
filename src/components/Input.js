import React from 'react'
import 'tachyons'
import './Input.css'

const Input = ({getInput,addInput,value,clear})=>{
	return(
		<form className='flex mt2'>
			<input 
				className='pa3 ba b--green bg-lightest-blue'
				type='search' 
				value={value}
				placeholder='Enter Task'
				name="input"
				onChange={getInput}
			/>
			<input type="submit" onClick={addInput} className='submit ml2' value="Add Me" />
			<button 
			className='pa2 ml2' 
			onClick={clear}
			>Clear</button>
		</form>
	)
}

export default Input;
import React ,{useState}from 'react'

export default function TodoGenerator(props) {
    const {supplyTodoMessage} = props
    const [userInput,setUserInput] = useState('');
    const inputTextChange=(target)=>{
        setUserInput(target.target.value)
    }
    const generateTodo = ()=>{
        supplyTodoMessage(userInput)
        setUserInput('')
    }
  return (
    <div>
        <input type="text" value={userInput} onChange={inputTextChange}/><button onClick={generateTodo}>Add</button>
    </div>
  )
}

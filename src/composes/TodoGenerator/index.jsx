import React ,{useState}from 'react'

export default function TodoGenerator(props) {
    const {supplyTodoMessage} = props
    const [userInput,setUserInput] = useState('');
    const inputTextChange=(target)=>{
        setUserInput(target.target.value)
    }
    const generateTodo = (e)=>{
        if(e._reactName === 'onKeyDown' && e.keyCode){
            if(e.keyCode!==13){
                return;
            }
        }
        supplyTodoMessage(userInput)
        setUserInput('')
    }
  return (
    <div>
        <input type="text" value={userInput} onChange={inputTextChange} onKeyDown={generateTodo}/><button  onClick={generateTodo}>Add</button>
    </div>
  )
}

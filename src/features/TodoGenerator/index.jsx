import { useState ,useEffect} from 'react'

export default function TodoGenerator(props) {
    const { supplyTodoMessage } = props
    const [userInput, setUserInput] = useState('');
    const inputTextChange = (event) => {
        setUserInput(event.target.value)
    }
    
    const [test, setTest] = useState(0)
    const generateTodo = (e) => {
        if (e._reactName === 'onKeyDown' && e.keyCode) {
            if (e.keyCode !== 13) {
                return;
            }
        }
        supplyTodoMessage(userInput)
        setUserInput('')
    }
    useEffect(()=>{
        console.log(test)
        console.log('flush!')
    },[test])
    return (
        <div>
            <input type="text" value={userInput} onChange={inputTextChange}
                onKeyDown={generateTodo} />
            <button onClick={generateTodo}>Add</button>
        </div>
    )
}

import { useState } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { addTodo } from '../todoListSlice';
import {uuid} from '../../utils/uuid'
import '../../asserts/css/todolist.css'
import ToDoApi from '../../api/todo.js'
export default function TodoGenerator() {
    const dispatch = useDispatch()
    const [userInput, setUserInput] = useState('');

    const inputTextChange = (event) => {
        setUserInput(event.target.value)
    }

    const generateTodo = (e) => {
        if (e._reactName === 'onKeyDown' && e.keyCode) {
            if (e.keyCode !== 13) {
                return;
            }
        }
        let todoItem = {
            id:uuid(),
            text: `${userInput}`,
            done: false
        }
        ToDoApi.addToDo(todoItem).then((response)=>{
            dispatch(addTodo(response.data))
        })
        
        setUserInput('')
    }

    return (
        <div className='generatorInput'>
            <textarea 
            maxLength={18}
            className='testAreaTodoData' 
            type="text" 
            value={userInput}
             onChange={inputTextChange}
                onKeyDown={generateTodo} />
            <button className='testAreaTodoSubBtn' onClick={generateTodo}>Add</button>
        </div>
    )
}

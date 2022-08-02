import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports';
import { addTodo } from '../todoListSlice';
import {uuid} from '../../utils/uuid'
import '../../asserts/css/todolist.css'
import '../../asserts/css/todolist.css'
export default function TodoGenerator(props) {
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
        dispatch(addTodo(todoItem))
        setUserInput('')
    }
    return (
        <div className='generatorInput'>
            <textarea className='testAreaTodoData' type="text" value={userInput}
             onChange={inputTextChange}
                onKeyDown={generateTodo} />
            <button className='testAreaTodoSubBtn' onClick={generateTodo}>Add</button>
        </div>
    )
}

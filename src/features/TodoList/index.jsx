import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import TodoGenerator from '../TodoGenerator'
import TodoGroup from '../TodoGroup'
import '../../asserts/css/todolist.css'
import ToDoApi from '../../api/todo.js'
import { useDispatch } from 'react-redux'
import { searchTodoList } from '../todoListSlice'
export default function TodoList() {
    const todoList = useSelector((state) => state.todoList)
    const dispatch = useDispatch()
    useEffect(()=>{
        ToDoApi.getToDo().then((response)=>{
            console.log(response.data)
            dispatch(searchTodoList(response.data))
            console.log(todoList)
        })
    },[])
    return (
        <div className='todoListBox todoList-card'>
            <div className='titleName'>TodoList</div>
            <div className='tasks'>
                <div className='kon'></div>
                <TodoGroup todoList={todoList} />
                <div className='kon'></div>
            </div>
            <div className='generatorUserInput'>
                <TodoGenerator />
            </div>
        </div>
    )
}

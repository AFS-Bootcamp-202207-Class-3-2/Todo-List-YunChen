import { useSelector } from 'react-redux'
import TodoGenerator from '../TodoGenerator'
import TodoGroup from '../TodoGroup'
import '../../asserts/css/todolist.css'
export default function TodoList() {
    const todoList = useSelector((state) => state.todoList)
    console.log(todoList)
    return (
        <div className='todoListBox'>
            <div>TodoList</div>
            <div className='tasks'>
                <div className='kon'></div>
                <TodoGroup todoList={todoList} />
                <div className='kon'></div>
            </div>
            <TodoGenerator />
        </div>
    )
}

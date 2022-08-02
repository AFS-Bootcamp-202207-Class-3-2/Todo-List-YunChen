import { useSelector } from 'react-redux'
import TodoGenerator from '../TodoGenerator'
import TodoGroup from '../TodoGroup'
import '../../asserts/css/todolist.css'
export default function TodoList() {
    const todoList = useSelector((state) => state.todoList)
    return (
        <div className='todoListBox'>
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

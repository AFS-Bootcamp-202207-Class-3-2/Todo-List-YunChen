import { useState } from 'react'

import TodoGenerator from '../TodoGenerator'
import TodoGroup from '../TodoGroup'
export default function TodoList() {
    const [todoList, setTodoList] = useState([]);
    const supplyTodoMessage = (todoMessage) => {
        setTodoList([...todoList, todoMessage])
    }
    return (
        <>
            <div>TodoList</div>
            <TodoGroup todoList={todoList} />
            <TodoGenerator supplyTodoMessage={supplyTodoMessage} />
        </>
    )
}

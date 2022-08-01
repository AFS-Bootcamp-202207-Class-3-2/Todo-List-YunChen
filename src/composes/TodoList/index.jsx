import React ,{useEffect}from 'react'

import TodoGenerator from '../TodoGenerator'
import TodoGroup from '../TodoGroup'
export default function TodoList() {
    const todoList = []
    useEffect(()=>{},todoList)
    const supplyTodoMessage = (todoMessage)=>{
        todoList.push(todoMessage)
        console.log(todoList)
    }
    return (
        <>
            <div>TodoList</div>
            <input type="disabled" value="aa" />
            <TodoGroup/>
            <TodoGenerator supplyTodoMessage={supplyTodoMessage}/>
        </>
    )
}

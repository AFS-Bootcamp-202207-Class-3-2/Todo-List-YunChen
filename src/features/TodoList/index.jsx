import { useState } from 'react'
import { useSelector } from 'react-redux'
import TodoGenerator from '../TodoGenerator'
import TodoGroup from '../TodoGroup'
export default function TodoList() {
    const todoList = useSelector((state)=>state.todoList)
    console.log(todoList)
    return (
        <>
            <div>TodoList</div>
            <TodoGroup todoList={todoList} />
            <TodoGenerator />
        </>
    )
}

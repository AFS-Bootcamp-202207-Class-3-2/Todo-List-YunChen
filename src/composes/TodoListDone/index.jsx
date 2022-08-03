import React, { useEffect } from 'react'
import TodoGroup from '../../features/TodoGroup'
import { useSelector } from 'react-redux'
export default function TodoListDone() {
    const doneDone = useSelector(state => state.todoList)
    let hadDone = doneDone.filter(item => {
        return item.done
    })
    return (
        <div>
            <TodoGroup todoList={hadDone} />
        </div>
    )
}

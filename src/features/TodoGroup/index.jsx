import React from 'react'
import TodoItem from '../TodoItem'
export default function TodoGroup(props) {
    const { todoList } = props
    return (
        <div>
            {
                todoList.map((item, idx) => {
                    return <TodoItem key={idx} todo={item} />
                })
            }
        </div>
    )
}
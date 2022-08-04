import React from 'react'
import TodoItem from '../TodoItem'
export default function TodoGroup(props) {
    const { todoList } = props
    console.log(todoList ,'saasas')
    
    return (
        <div>
            {
                todoList.map((item, idx) => {
                    return <TodoItem key={item.id} todo={item} />
                })
            }
        </div>
    )
}

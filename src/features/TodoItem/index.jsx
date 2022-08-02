import '../../asserts/css/todoitem.css'
import { useDispatch } from 'react-redux'
import { removeTodo, updateDone } from '../todoListSlice'
import { useState } from 'react'
export default function TodoItem(props) {
  const { todo } = props
  const dispatch = useDispatch()
  const removeItem = () => {
    dispatch(removeTodo(todo))
  }
  let isDoneCss = 'todo-inner-text'
  if (todo.done) {
    isDoneCss = isDoneCss + ' todo-inner-text-done'
  }
  const updateDoneText = () => {
    console.log(todo.text)
    dispatch(updateDone(todo.id))
  }
  return (
    <div className='todoitem'>
      <div className='todo-text' onClick={updateDoneText}>
        <div className={isDoneCss}>
          <li>{todo.text}</li>
        </div>
      </div>
      <div className='todoitemBtn'>
        <span onClick={removeItem}>
          &times;
        </span>
      </div>
    </div>
  )
}

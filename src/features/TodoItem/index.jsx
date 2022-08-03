import '../../asserts/css/todoitem.css'
import { useDispatch } from 'react-redux'
import { removeTodo, updateDone } from '../todoListSlice'
import ToDoApi from '../../api/todo.js'
import { Button } from 'antd';
export default function TodoItem(props) {
  const { todo } = props

  const dispatch = useDispatch()

  const removeItem = () => {
    ToDoApi.deleteToDo(todo.id).then((res) => {
      dispatch(removeTodo(res.data))
    })

  }
  let isDoneCss = 'todo-inner-text'
  if (todo.done) {
    isDoneCss = isDoneCss + ' todo-inner-text-done'
  }

  const updateDoneText = () => {
    let updataOjb = {
      id: todo.id,
      text: todo.text,
      done: !todo.done
    }
    ToDoApi.updateToDo(updataOjb.id, updataOjb).then(res => {
      console.log(res.data, 'update Mock')
      if (res.data.done) {
        isDoneCss = isDoneCss + ' todo-inner-text-done'
      }
      dispatch(updateDone(res.data.id))
    })
  }

  return (
    <div className='todoitem'>
      <div className='todo-text' onClick={updateDoneText}>
        <div className={isDoneCss}>
          <li>{todo.text}</li>
        </div>
      </div>
      <div >
        <Button className='antd-delete-btn' type="primary" danger onClick={removeItem}>
          &times;
        </Button>
      </div>
    </div>
  )
}

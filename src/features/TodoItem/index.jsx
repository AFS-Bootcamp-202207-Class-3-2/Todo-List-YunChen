import '../../asserts/css/todoitem.css'
export default function TodoItem(props) {
  const { todo } = props
  console.log(todo)
  return (

    <div className='todoitem'>
      {todo.text}
    </div>
  )
}

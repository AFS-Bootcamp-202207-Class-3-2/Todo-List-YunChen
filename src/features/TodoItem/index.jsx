export default function TodoItem(props) {
  const { todo } = props
  console.log(todo)
  return (

    <div>
      <input type="disabled" value={todo.text} onChange={() => { }} />
    </div>
  )
}

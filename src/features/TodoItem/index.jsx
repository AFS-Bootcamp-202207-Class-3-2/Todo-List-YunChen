export default function TodoItem(props) {
  const { todo } = props
  return (

    <div>
      <input type="disabled" value={todo} onChange={() => { }} />
    </div>
  )
}

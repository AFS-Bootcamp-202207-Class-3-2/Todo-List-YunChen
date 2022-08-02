import './App.css';
import './asserts/css/todolist.css'
import TodoList from './features/TodoList';
function App() {
  return (
    <div className="App">
      <div></div>
      <div className='todoList-card'><TodoList/></div>
      <div></div>
    </div>
  );
}

export default App;

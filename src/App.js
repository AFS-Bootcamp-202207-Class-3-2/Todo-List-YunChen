import './App.css';
import './asserts/css/todolist.css'
import routes from './router'
import {useRoutes, NavLink } from 'react-router-dom';
function App() {
  const element = useRoutes(routes)
  return (
    <div className='app-total-box'>
      <div className='nav-btn-box'>
        <NavLink className={({isActive}) => !isActive?'nav-btn':'nav-btn nav-btn-active'} to={"/"}>TodoList</NavLink>
        <NavLink className={({isActive}) => !isActive?'nav-btn':'nav-btn nav-btn-active'} to={"/help"}>Help</NavLink>
        <NavLink className={({isActive}) => !isActive?'nav-btn':'nav-btn nav-btn-active'} to={"/done"}>done</NavLink>
      </div>
      <div className="App">
        {element}
      </div>

    </div>
  );
}

export default App;

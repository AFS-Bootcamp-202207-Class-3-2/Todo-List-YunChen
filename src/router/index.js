import { Navigate } from 'react-router-dom'
import TodoListDone from '../composes/TodoListDone'
import TodoList from '../features/TodoList'
import NoFindPage from '../composes/NoFindPage'
export default
    [
        {
            path: '/',
            element: <TodoList />
        },
        {
            path: 'help',
            element: <div>help</div>
        },
        {
            path: 'done',
            element: <TodoListDone />
        },
        {
            path: '/',
            element: <Navigate to="/" />
        },{
            path: '*',
            element: <NoFindPage />
        }
    ]

import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import TodoGenerator from '../TodoGenerator'
import TodoGroup from '../TodoGroup'
import '../../asserts/css/todolist.css'
import ToDoApi from '../../api/todo.js'
import { useDispatch } from 'react-redux'
import { searchTodoList } from '../todoListSlice'
import { gsap } from "gsap";
import { Back } from 'gsap';
export default function TodoList() {
    const todoList = useSelector((state) => state.todoList)
    const dispatch = useDispatch()
    useEffect(()=>{
        const tl1 = gsap.timeline()
        tl1.staggerFromTo(
            '.titleName span', .5, {
            ease: Back.easeOut.config(1.7),
            opacity: 0,
            rotation: -180,
            y: -100

        }, {
            ease: Back.easeOut.config(1.7),
            opacity: 1,
            rotation: 360,
            y: () => {
                return Math.random() * 50
            }
        }, .1, '+=0', () => {

        }
        )
        ToDoApi.getToDo().then((response)=>{
            dispatch(searchTodoList(response.data))
        })
        
    },[])
    return (
        <div className='todoListBox todoList-card'>
            <div className='titleName'>
                <span>T</span>
                <span>o</span>
                <span>d</span>
                <span>o</span>
                <span>&nbsp;</span>
                <span>L</span>
                <span>i</span>
                <span>s</span>
                <span>t</span>
            </div>
            <div className='tasks'>
                <div className='kon'></div>
                <TodoGroup todoList={todoList} />
                <div className='kon'></div>
            </div>
            <div className='generatorUserInput'>
                <TodoGenerator />
            </div>
        </div>
    )
}

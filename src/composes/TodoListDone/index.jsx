import React, { useEffect } from 'react'
import TodoGroup from '../../features/TodoGroup'
import { useSelector } from 'react-redux'
import './index.css'
import { gsap } from "gsap";
import { Back } from 'gsap';
export default function TodoListDone() {
    const doneDone = useSelector(state => state.todoList)
    let hadDone = doneDone.filter(item => {
        return item.done
    })
    useEffect(()=>{
        const tl1 = gsap.timeline()
        tl1.staggerFromTo(
            '.done-page span', .5, {
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
        
    },[])
    return (
        <div className='done-page-box'>
            <div className="done-page">
                <span>D</span>
                <span>o</span>
                <span>n</span>
                <span>e</span>
                <span>&nbsp;</span>
                <span>P</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
            </div>
            <div>
                <TodoGroup todoList={hadDone} />
            </div>
        </div>
    )
}

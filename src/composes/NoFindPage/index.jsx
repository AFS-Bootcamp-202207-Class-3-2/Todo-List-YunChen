import React, { useEffect } from 'react'
import { gsap } from "gsap";
import './index.css'
import { Back } from 'gsap';
import Test from '../../api/todo.js'
export default function NoFindPage() {
    useEffect(() => {
        Test.getToDo().then((response) => {
            console.log(response);
        })
        const tl1 = gsap.timeline()
        tl1.staggerFromTo(
            '.nofind-font span', .5, {
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
    })
    return (
        <div>
            <div className='nofind-font'>
                <span>N</span>
                <span>o</span>
                <span>&nbsp;</span>
                <span>F</span>
                <span>i</span>
                <span>n</span>
                <span>d</span>
                <span>&nbsp;</span>
                <span>P</span>
                <span>a</span>
                <span>g</span>
                <span>e</span>
            </div>
        </div>
    )
}

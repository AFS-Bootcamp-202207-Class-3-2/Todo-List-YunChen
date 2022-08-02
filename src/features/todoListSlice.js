import { createSlice } from "@reduxjs/toolkit";
const initState = [
    {
        id: "cc53dc26-61b0-406b-99dd-b8825dd2ceec",
        text: "todo example",
        done: false
    }
]
export const todoSlice = createSlice({
    name: 'todoList',
    initialState:initState,
    reducers: {
        addTodo:(state,action)=>{
            let dataObj = action.payload
            state.push(dataObj)
        },removeTodo:(state,action)=>{
            for(let idx in state){
                if(action.payload.id === state[idx].id){
                    state.splice(idx,1)
                }
            }
        },updateDone:(state,action)=>{
            console.log(action.payload)
            for(let idx in state){
                if(action.payload === state[idx].id){
                    state[idx].done = !state[idx].done
                }
            }
        }
    }
})
export default todoSlice.reducer
export const {addTodo,removeTodo,updateDone} = todoSlice.actions
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
            console.log(state,action)
            state.push(dataObj)
            console.log(state,action)
        }
    }
})
export default todoSlice.reducer
export const {addTodo} = todoSlice.actions
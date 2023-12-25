import { ADD_TODO } from "./actionTypes"

export const addtask=(payload)=>{
    return{
        type:ADD_TODO,
        payload
    }
}
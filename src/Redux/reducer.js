import {ADD_TODO} from "./actionTypes"
const initState=[
    {id:0,text:"sleep"},
    {id:1,text:"study"},
    {id:2,text:"sing"}
]
export const reducer=(state=initState,action)=>{
switch (action.type) {
    case ADD_TODO:
        return [...state,action.payload]


    default:
        return state

}
}
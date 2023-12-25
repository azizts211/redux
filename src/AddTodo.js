import { useState } from "react"
import {useDispatch} from "react-redux"
import { addtask } from "./Redux/action"
const AddTodo=()=>{
    const [input,setInput]=useState("")
    const dispatch=useDispatch()
const add=()=>{
dispatch(addtask({id:Math.random(),text:input}))
setInput("")
}

    return(
        <div>
<input onChange={(event)=>setInput(event.target.value)} value={input}/>
<button onClick={add}>add</button>
        </div>
    )
}
export default AddTodo
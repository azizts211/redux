import { useSelector } from "react-redux"
const TodoList=()=>{
  const todos=useSelector((state)=>state)
  console.log(todos)
    return(
        <>
        {todos.map((el)=>
        <h1>{el.text}</h1>)}
        </>
    )
}
export default TodoList
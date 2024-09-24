import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

const KeepTodo = () => {
    const todos = useSelector((state)=>state.todos)
    const dispatch = useDispatch()

  return (
    <div className='flex gap-2 m-3 flex-wrap'>
      {
        todos.map((todo)=>(
            <div key={todo.id} className='w-[20rem] bg-white p-4 rounded-xl'>
        <div>
            <h1 className='font-bold text-slate-700 capitalize text-2xl cursor-default'>{todo.text}</h1>
        </div>
        <div>
            <p className='text-lg text-justify my-4'>{todo.content}</p>
        </div>
        <div className='text-end'>
            <button 
            onClick={()=>dispatch(removeTodo(todo.id))}
            className='bg-red-700 text-lg px-4 py-2 rounded-xl text-white capitalize'>
                delete
            </button>
        </div>
      </div>
        ))
      }
    </div>
  )
}

export default KeepTodo

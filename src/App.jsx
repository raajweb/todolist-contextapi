import { useEffect, useState } from 'react'

import './App.css'
import { ToDoContextProvider } from './Context'
import TodoForm from './Context/TodoForm';
import TodoItem from './Context/TodoItem';
import { parse } from 'postcss';

function App() {
  const [Todos, setTodos] = useState([]);
  const addTodo =(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }

  const updateToDo = (id,todo)=>{
    console.log("update value app", id, todo )
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id ===id ? todo : prevTodo)))
  }
  const deletedTodo =  (id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id !==id))

  }

  const toggleCompleted = (id) =>{
    setTodos((prev)=>prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo))

  }

  useEffect(()=>{
   const todos= JSON.parse(localStorage.getItem("todos"));
    if(todos && todos.length > 0){
      setTodos(todos)
    }

  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(Todos))
 },[Todos])



  return (
    <ToDoContextProvider value={{Todos,addTodo,updateToDo,deletedTodo,toggleCompleted}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2"> Your Todos List</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm  />

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          Todos.map((todo)=>(
                            <div key={todo.id} className='w-full'>
                              <TodoItem todo={todo} />
                            </div>
                          ))

                        }
                    </div>
                </div>
            </div>   
    </ToDoContextProvider>
  )
}

export default App

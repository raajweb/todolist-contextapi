import { useState } from "react";
import { useToDo } from "./TodoContext";

function TodoForm() {
    const [todo, setTodo] = useState('')
    const { addTodo } = useToDo();
    const add = (e) => {
        e.preventDefault();
        if (!todo) return
        addTodo({ todo, completed: false })
        setTodo("")

       // console.log("todo from add form",todo)

    }

    return (
      


<form onSubmit={add}>   
    <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <i className="fa-solid fa-file-pen text-black-700"></i>
        </div>
        <input type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="write something...." required  onChange={(e) => setTodo(e.target.value)}
                value={todo} />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add To Do</button>
    </div>
</form>

    );
}

export default TodoForm;


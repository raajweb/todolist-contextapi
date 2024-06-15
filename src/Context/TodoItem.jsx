import React,{useState} from 'react'
import { useToDo } from './TodoContext';

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateToDo,deletedTodo,toggleCompleted } = useToDo();

    const editTodo = () => {
        console.log('run eidt ',todoMsg)
        updateToDo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const deleteTodo=(id)=>{
        deletedTodo(id);
    }

    const toggleComplete=()=>{
        toggleCompleted(todo.id)	
    
    }


    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            

            

<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" checked={todo.completed}
                onChange={toggleComplete} />
  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  
</label>


            <input
                type="text"
                className={`border outline-none w-full  rounded-lg ${isTodoEditable ? "border-black/10 px-2 bg-white-500" : "border-transparent bg-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    if (isTodoEditable) {
                        editTodo();
                    } else setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? <i className="fa-regular fa-floppy-disk text-green-500"></i> : <i className="fa-regular fa-pen-to-square text-blue-500"></i>}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                <i className="fa-regular fa-trash-can text-red-500"></i>
            </button>
        </div>
    );
}

export default TodoItem;


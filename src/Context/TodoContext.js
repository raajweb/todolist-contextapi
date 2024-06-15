import {createContext,useContext} from 'react';

export const ToDoContext =createContext({
    Todos:{
        id:Date.now(),
        todo:"text",
        completed:false
    },
    addTodo:(todo)=>{},
    updateToDo:(id,todo)=>{},
    deletedTodo:(id)=>{},
    toggleCompleted:(id)=>{}

});

export const useToDo = () => {
  return   useContext(ToDoContext)
}

export const ToDoContextProvider = ToDoContext.Provider;
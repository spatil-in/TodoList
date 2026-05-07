import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
        id:1,
        todo:"todo msg",
        checked:"false"
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id,todo) => {},
    deleteTodo:(id) => {},
    checkedIn:(id) => {}
})

export const TodoProvider = TodoContext.Provider

export const useTodo = () =>{
    return useContext(TodoContext)
}


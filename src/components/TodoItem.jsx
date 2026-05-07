import { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todo }) {
    const [todoEdit , setTodoEdit] = useState(false)
    const {updateTodo , deleteTodo , checkedIn} = useTodo()
    const [todoMsg , setTodoMsg] = useState(todo.todo)


    const editTodo = () =>{
        updateTodo(todo.id ,{...todo , todo: todoMsg})
        setTodoEdit(false)
    }

    const checkIn = () => {
        checkedIn(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                todo.checked ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.checked}
                onChange={checkIn}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    todoEdit ? "border-black/10 px-2" : "border-transparent"
                } ${todo.checked ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!todoEdit}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.checked) return;

                    if (todoEdit) {
                        editTodo();
                    } else setTodoEdit((prev) => !prev);
                }}
                disabled={todo.checked}
            >
                {todoEdit ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;

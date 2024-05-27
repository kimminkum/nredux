import React from "react";
import { Todo } from "../reducers/todoReducer";

type Props = {
    todo: Todo;
    deleteTodo: (id: number) => void;
}


const TodoItem:React.FC<Props> = ({todo , deleteTodo}) => {
    return (
        <li>
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>X</button>
        </li>
    )
} 

export default TodoItem;
import React, { ChangeEvent, useState } from "react";
import { styled } from "styled-components";
import { useDispatch, useSelector} from "react-redux";
import {RootState, deleteAction, addAction} from "../store";


interface Todo {
    id: number;
    text: string;
}


const TitleH1 = styled.h1`
    text-align: center;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
`;
const InputText = styled.input`
    border: none;
    border-bottom: 1px solid #ccc;
    height: 30px;
    line-height: 30px;
    width: 200px;
`;
const Btn = styled.button`
    background-color: #000;
    color: white;
    border-radius: 0 6px 6px 0;
    padding: 0 20px;
`;

const Home: React.FC = () => {
    const [text, setText] = useState<string>("");
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todo.todo_list);
    
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addAction({text}));
            setText("");
        }
    };

    const handleDelete = (id: number) => {
        dispatch(deleteAction({ id }));
    };

    return (
        <div>
            <TitleH1>To Do</TitleH1>
            <Form onSubmit={onSubmit}>
                <InputText type="text" value={text} onChange={onChange} />
                <Btn>Add</Btn>
            </Form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.text}</span>
                        <button onClick={() => handleDelete(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

/**
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const AddTodo = (text: string) => {
    store.dispatch(addAction({text}));
}
const paintTodo = () => {
    const state: RootState = store.getState();
    const todos = state.todo.todo_list;

    if(ul) {ul.innerHTML = '';}

    todos.forEach((todo) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        const span = document.createElement('span');
        btn.innerText = 'X';
        span.classList.add('todo-txt');
        btn.classList.add('btn');
        li.id = todo.id.toString();
        span.innerText = todo.text;

        btn.addEventListener('click', () => {
            store.dispatch(deleteAction({ id: todo.id }));
        });

        ul?.appendChild(li);
        li?.appendChild(span);
        li?.appendChild(btn);
    });
};

const onSubmit = (e: Event) => {
    e.preventDefault();
    if(input) {
        const todo = input.value.trim();
        if(todo) {
            input.value = '';
            AddTodo(todo);
        }
    }
};

store.subscribe(paintTodo);


if(form) {
    form.addEventListener('submit', onSubmit);
}
 */